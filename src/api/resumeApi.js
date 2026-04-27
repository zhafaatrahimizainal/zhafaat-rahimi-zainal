import { supabase } from "../lib/supabaseClient";
import { base64ToBlob, generatePreviewFromFile } from "../utils/generatePreview";


export const uploadResume = async (file, siteId) => {
    try {
        if (!file) throw new Error("No file selected");
        if (file.type !== "application/pdf") {
            throw new Error("File must be PDF");
        }

        const filePath = `${siteId}/resume.pdf`;

        const { error: fileError } = await supabase.storage
            .from("resumes")
            .upload(filePath, file, {
                contentType: "application/pdf",
                cacheControl: "0",
                upsert: true,
            });

        if (fileError) throw fileError;

        const previewPath = `${siteId}/previewResume.png`;
        const previewBase64 = await generatePreviewFromFile(file);
        const previewBlob = base64ToBlob(previewBase64);
        console.log("Preview:", previewBlob.size / 1024, "KB");

        const { error: previewError } = await supabase.storage
            .from("gallery")
            .upload(previewPath, previewBlob, {
                cacheControl: "0",
                contentType: "image/webp",
                upsert: true,
            });

        if (previewError) throw previewError;

        console.log("✅ File uploaded:");
        console.log("🖼️ Preview uploaded:");

        // 6️⃣ Ambil public URL preview
        const { data: previewData } = supabase.storage
            .from("gallery")
            .getPublicUrl(previewPath);

        const previewURL = previewData.publicUrl + `?t=${Date.now()}`;

        console.log("🖼️ Preview URL:", previewURL);

        // return
        return {
            previewURL,
        };


    } catch (error) {
        console.error("❌ Upload failed:", error.message);
        throw error;
    }
};

export async function getResumeSignedUrl(siteId) {
    try {
        const { data, error } = await supabase.storage
            .from("resumes")
            .createSignedUrl(`${siteId}/resume.pdf`, 3600); // berlaku 60 detik

        if (error) throw error;
        return (data.signedUrl);


    } catch (error) {
        console.error("❌ getURL failed:", error.message);
        throw error;
    }
}

// simpan / update URL resume + preview ke database
export async function saveResumeURL(previewURL, siteId) {
    const { data, error } = await supabase
        .from("site_settings")
        .upsert(
            {
                site_id: siteId,
                key: "resume",
                value: {
                    previewURL,
                },
            },
            {
                onConflict: "site_id,key", // 🔥 INI YANG PALING PENTING
            }
        );

    if (error) {
        console.error("Failed save resume data:", error);
        throw error;
    }

    return data;
}

// ambil URL resume + preview dari database saat app start
export const getResumeURL = async (siteId) => {
    try {
        const { data, error } = await supabase
            .from("site_settings")
            .select("value")
            .eq("site_id", siteId)
            .eq("key", "resume")
            .single();

        if (error) throw error;

        return data;

    } catch (error) {
        console.error("❌ Failed to get resume data:", error.message);
        return null;
    }
};