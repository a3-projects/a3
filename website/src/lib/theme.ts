import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setResolvedTheme(
      (window.localStorage.getItem("theme") as Theme) ??
        (document.documentElement.classList.contains("dark") ? "dark" : "light")
    );
    setIsLoaded(true);
  }, []);

  const toggleTheme = () => {
    console.log("resolvedTheme", resolvedTheme);
    // Trigger the click event on the theme toggle element
    if (resolvedTheme === "dark") {
      console.log("Switching to dark theme");

      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
      setResolvedTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
      setResolvedTheme("dark");
    }
  };

  return {
    resolvedTheme,
    toggleTheme,
    isLoaded,
  };
}
