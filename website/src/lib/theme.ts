import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  // Default is dark, as it matches a3 aesthetics more
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTheme(
      (window.localStorage.getItem("theme") as Theme) ??
        (document.documentElement.classList.contains("dark") ? "dark" : "light")
    );
    setIsLoaded(true);
  }, []);

  const toggleTheme = () => {
    // Trigger the click event on the theme toggle element
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return {
    theme,
    toggleTheme,
    isLoaded,
  };
}
