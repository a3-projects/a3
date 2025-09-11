"use client";

import type { ComponentProps } from "react";
import { useTheme } from "@/lib/theme";

import { Button } from "@/ui/Button";
import { MoonIcon, SunDimIcon } from "lucide-react";
import { useRef } from "react";
import { flushSync } from "react-dom";

export const ThemeToggle = (props: ComponentProps<typeof Button>) => {
  const { resolvedTheme, isLoaded, toggleTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const Icon = () => {
    if (!isLoaded) return null;
    return resolvedTheme === "dark" ? <MoonIcon /> : <SunDimIcon />;
  };

  const handleToggleTheme = async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        toggleTheme();
      });
    }).ready;

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
    const centerY = top + height / 2;
    const centerX = left + width / 2;

    // Calculate the diagonal of the viewport to ensure full coverage
    const viewportDiagonal = Math.hypot(window.innerWidth, window.innerHeight);
    const triangleSize = viewportDiagonal * 2.5; // Much larger margin for guaranteed coverage

    document.documentElement.animate(
      {
        clipPath: [
          `polygon(${centerX}px ${centerY}px, ${centerX}px ${centerY}px, ${centerX}px ${centerY}px)`,
          `polygon(${centerX - triangleSize}px ${centerY + triangleSize}px, ${centerX + triangleSize}px ${centerY + triangleSize}px, ${centerX}px ${centerY - triangleSize}px)`,
        ],
        filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <Button
      ref={buttonRef}
      id="themeToggle"
      aria-label={`Zu ${resolvedTheme === "dark" ? "hellem" : "dunklem"} Design wechseln`}
      type="button"
      disabled={!isLoaded}
      variant="ghost"
      size="icon"
      onClick={handleToggleTheme}
      {...props}
    >
      <Icon />
    </Button>
  );
};
