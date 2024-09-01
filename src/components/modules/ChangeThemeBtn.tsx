"use client";
import { useTheme } from "next-themes";

export default function ChangeThemeBtn() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}>
      change theme
    </button>
  );
}
