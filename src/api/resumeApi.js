import { supabase } from "../lib/supabaseClient";
import { base64ToBlob, generatePreviewFromFile } from "../utils/generatePreview";

export const uploadResume = async (file) => {
    try {
        if (!file) throw new Error("No file selected");
        if (file.type !== "application/pdf") {
            throw new Error("File must be PDF");
        }

        const fileName = "resume.pdf";

        const { error: fileError } = await supabase.storage
            .from("resume")
            .upload(fileName, file, {
                cacheControl: "3600",
                upsert: true,
            });

        if (fileError) throw fileError;

        const previewName = "preview.png";
        const previewBase64 = await generatePreviewFromFile(file);
        const previewBlob = base64ToBlob(previewBase64);

        const { error: previewError } = await supabase.storage
            .from("resume")
            .upload(previewName, previewBlob, {
                cacheControl: "3600",
                upsert: true,
            });

        if (previewError) throw previewError;

        // 5️⃣ Ambil public URL file
        const { data: fileData } = supabase.storage
            .from("resume")
            .getPublicUrl(fileName);


        // 6️⃣ Ambil public URL preview
        const { data: previewData } = supabase.storage
            .from("resume")
            .getPublicUrl(previewName);

        const fileURL = fileData.publicUrl + `?t=${Date.now()}`;
        const previewURL = previewData.publicUrl + `?t=${Date.now()}`;

        console.log("✅ File uploaded:", fileURL);
        console.log("🖼️ Preview uploaded:", previewURL);

        // return dua-duanya
        return {
            fileURL,
            previewURL,
        };

    } catch (error) {
        console.error("❌ Upload failed:", error.message);
        throw error;
    }
};

// simpan / update URL resume + preview ke database
export async function saveResumeURL(fileURL, previewURL) {
    const { data, error } = await supabase
        .from("settings")
        .upsert(
            {
                key: "resume_data",
                value: {
                    fileURL,
                    previewURL,
                },
            },
            { onConflict: "key" }
        );

    if (error) {
        console.error("Failed save resume data:", error);
        throw error;
    }

    return data;
}

// ambil URL resume + preview dari database saat app start
export const getResumeURL = async () => {
    try {
        const { data, error } = await supabase
            .from("settings")
            .select("value")
            .eq("key", "resume_data")
            .single();

        if (error) throw error;

        return data;

    } catch (error) {
        console.error("❌ Failed to get resume data:", error.message);
        return null;
    }
};