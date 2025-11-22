"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const initial = document.documentElement.classList.contains("dark");
    setIsDark(initial);
  }, []);

  const toggle = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      }
    }
  }, []);

  return (
    <button onClick={toggle} aria-label="Toggle theme" className=" px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700">
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
