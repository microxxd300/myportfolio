import { useEffect, useState } from "react";

const STORAGE_KEY = "theme"; // "system" | "light" | "dark"

function systemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Cycles between system / light / dark, persists the choice, and
// stamps the resolved theme on <html data-theme="...">.
export function useTheme() {
  const [mode, setMode] = useState(
    () => localStorage.getItem(STORAGE_KEY) || "system"
  );

  useEffect(() => {
    const apply = () => {
      const resolved = mode === "system" ? systemTheme() : mode;
      document.documentElement.dataset.theme = resolved;
    };
    apply();
    localStorage.setItem(STORAGE_KEY, mode);

    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    }
  }, [mode]);

  return [mode, setMode];
}
