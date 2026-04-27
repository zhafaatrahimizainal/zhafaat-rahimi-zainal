import { supabase } from "../lib/supabaseClient";

export const getSiteBySlug = async (slug) => {
  try {
    const { data, error } = await supabase
      .from("sites")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) throw error;

    return data;
  } catch (err) {
    console.error("Site not found:", err);
    return null;
  }
};


export async function updateOwnerName(siteId, newName) {
  const { data, error } = await supabase
    .from("sites")
    .update({ owner_name: newName })
    .eq("id", siteId)
    .select()
    .single();

  if (error) {
    console.error("Failed update owner name:", error);
    throw error;
  }

  return data;
}