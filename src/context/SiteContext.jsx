import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentSlug } from "../lib/getCurrentSlug";
import { getSiteBySlug } from "../api/siteService";

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [site, setSite] = useState(null);
  const [loadingSite, setLoadingSite] = useState(true);

  useEffect(() => {
    const loadSite = async () => {
      const slug = getCurrentSlug();
      const siteData = await getSiteBySlug(slug);
      setSite(siteData);
      setLoadingSite(false);
    };

    loadSite();
    // console.log(site)
  }, []);

  return (
    <SiteContext.Provider value={{ site, setSite, loadingSite }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => useContext(SiteContext);
