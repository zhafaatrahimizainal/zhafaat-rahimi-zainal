import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import bcrypt from "bcryptjs";
import { useSite } from "./SiteContext";

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const { site } = useSite();
  const [isAdmin, setIsAdmin] = useState(false);
  // ambil password dari env
  const SECRET = import.meta.env.VITE_ADMIN_PASSWORD;

  // cek localStorage saat pertama load
  useEffect(() => {
    const saved = localStorage.getItem("isAdmin");
    if (saved === "true") setIsAdmin(true);
  }, []);

  const loginAdmin = async (inputPassword) => {
    if (!site) return false;
    try {
      const { data, error } = await supabase
        .from("sites")
        .select("password_hash")
        .eq("id", site.id)
        .single();

      if (error || !data) return false;

      const match = await bcrypt.compare(inputPassword, data.password_hash);

      if (match) {
        setIsAdmin(true);
        localStorage.setItem("isAdmin", "true");
        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
  };

  return (
    <AdminContext.Provider
      value={{ isAdmin, setIsAdmin, loginAdmin, logoutAdmin }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => useContext(AdminContext);
