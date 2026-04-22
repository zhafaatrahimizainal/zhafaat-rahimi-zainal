import { createContext, useContext, useEffect, useState } from "react"

const AdminContext = createContext();

export function AdminProvider({children}) {
    const [isAdmin, setIsAdmin] = useState(false);
    // ambil password dari env
    const SECRET = import.meta.env.VITE_ADMIN_PASSWORD;

    // cek localStorage saat pertama load
    useEffect(() => {
      const saved = localStorage.getItem("isAdmin");
      if (saved === "true") setIsAdmin(true);
    }, [])

    const loginAdmin = (password) => {
        if (password === SECRET){
            setIsAdmin(true);
            localStorage.setItem("isAdmin", "true");
            return true;
        }
        return false;
    }
    
    const logoutAdmin = () => {
        setIsAdmin(false);
        localStorage.removeItem("isAdmin");
    }

    return (
        <AdminContext.Provider value={{isAdmin, loginAdmin, logoutAdmin}}>
            {children}
        </AdminContext.Provider>
    )
}

export const useAdmin = () => useContext(AdminContext)