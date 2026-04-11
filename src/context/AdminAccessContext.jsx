import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const SESSION_KEY = "portfolio-admin-auth";
const AdminAccessContext = createContext(null);

function readInitialAuth() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem(SESSION_KEY) === "1";
}

export function AdminAccessProvider({ children }) {
  const [isUnlocked, setIsUnlocked] = useState(readInitialAuth);
  const adminKey = import.meta.env.VITE_ADMIN_KEY || "";
  const isDev = Boolean(import.meta.env.DEV);
  const isEnabled = isDev || Boolean(adminKey);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (isUnlocked) {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } else {
      window.sessionStorage.removeItem(SESSION_KEY);
    }
  }, [isUnlocked]);

  const value = useMemo(
    () => ({
      isDev,
      isEnabled,
      isUnlocked: isDev || isUnlocked,
      unlock: (candidate) => {
        if (isDev) {
          setIsUnlocked(true);
          return true;
        }

        if (!adminKey) {
          return false;
        }

        const ok = String(candidate || "") === adminKey;
        if (ok) {
          setIsUnlocked(true);
        }
        return ok;
      },
      lock: () => setIsUnlocked(false)
    }),
    [adminKey, isDev, isEnabled, isUnlocked]
  );

  return <AdminAccessContext.Provider value={value}>{children}</AdminAccessContext.Provider>;
}

export function useAdminAccess() {
  const context = useContext(AdminAccessContext);
  if (!context) {
    throw new Error("useAdminAccess must be used inside AdminAccessProvider");
  }

  return context;
}
