import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import bcrypt from "bcryptjs";

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  // ambil password dari env
  const SECRET = import.meta.env.VITE_ADMIN_PASSWORD;

  // cek localStorage saat pertama load
  useEffect(() => {
    const saved = localStorage.getItem("isAdmin");
    if (saved === "true") setIsAdmin(true);
  }, []);

  const loginAdmin = async (inputPassword) => {
    try {
      const { data, error } = await supabase
        .from("admin_auth")
        .select("password_hash")
        .eq("username", "zhafaat rahimi zainal")
        .single();

      if (error) throw error;

      const hash = data.password_hash;
      const match = await bcrypt.compare(inputPassword, hash);
      return match;
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
    <AdminContext.Provider value={{ isAdmin, setIsAdmin, loginAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => useContext(AdminContext);
