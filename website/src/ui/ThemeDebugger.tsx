import { useTheme } from "@/lib/theme";

export function ThemeDebugger() {
  const { resolvedTheme, setTheme, toggleTheme, isLoaded } = useTheme();

  if (!isLoaded) {
    return <div>Loading theme...</div>;
  }

  const currentTheme = localStorage.getItem("theme") || "system";
  const hasDarkClass = document.documentElement.classList.contains("dark");

  return (
    <div className="border-border bg-back/50 rounded-lg border p-4 backdrop-blur-sm">
      <h3 className="mb-3 text-lg font-semibold">Theme Debug Panel</h3>

      <div className="space-y-2 text-sm">
        <p>
          <strong>Current Theme (localStorage):</strong> {currentTheme}
        </p>
        <p>
          <strong>Resolved Theme (React state):</strong> {resolvedTheme}
        </p>
        <p>
          <strong>Has dark class:</strong> {hasDarkClass ? "Yes" : "No"}
        </p>
        <p>
          <strong>Is Loaded:</strong> {isLoaded ? "Yes" : "No"}
        </p>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setTheme("light")}
            className="bg-primary-500 rounded px-3 py-1 text-sm text-white"
          >
            Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="bg-primary-500 rounded px-3 py-1 text-sm text-white"
          >
            Dark
          </button>
          <button onClick={toggleTheme} className="bg-secondary-500 rounded px-3 py-1 text-sm text-white">
            Toggle
          </button>
        </div>

        <div className="text-muted-front mt-2 text-xs">
          <p>Note: Using simple dark class approach for maximum compatibility.</p>
        </div>
      </div>
    </div>
  );
}
