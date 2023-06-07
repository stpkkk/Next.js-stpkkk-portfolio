"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Add animation class to the body element when the theme changes
    document.body.classList.add("theme-transition");
    setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 1000);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`flex justify-between items-center w-[42px] h-[20px] p-[2px] rounded-3xl cursor-pointer ${
        theme === "dark" ? "bg-primary" : "bg-black"
      }`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="text-[12px] transition-colors duration-300">☀️</div>
      <div className="text-[12px] transition-colors duration-300">🌙</div>
      <div
        className={`absolute w-6 h-6 rounded-full bg-green-500 transform ${
          theme === "dark" ? "translate-x-4" : "-translate-x-1"
        } transition-transform duration-300`}
      />
    </div>
  );
};
