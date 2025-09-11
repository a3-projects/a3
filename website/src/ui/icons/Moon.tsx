import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";

export interface MoonProps {
  size?: number;
}

const Moon = forwardRef<ElementRef<"svg">, MoonProps & ComponentPropsWithoutRef<"svg">>((props, ref) => {
  const { children, className, size = 24, ...rest } = props;

  return (
    <svg
      viewBox="0 0 24 24"
      dangerouslySetInnerHTML={{
        __html: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
      }}
      ref={ref}
      className={cn("fill-none stroke-current", className)}
      width={size}
      height={size}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {children}
    </svg>
  );
});

Moon.displayName = "Moon";

export { Moon };
