import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";

export interface SunProps {
  size?: number;
}

const Sun = forwardRef<ElementRef<"svg">, SunProps & ComponentPropsWithoutRef<"svg">>((props, ref) => {
  const { children, className, size = 24, ...rest } = props;

  return (
    <svg
      viewBox="0 0 24 24"
      dangerouslySetInnerHTML={{
        __html:
          '<circle cx="12" cy="12" r="4"/><path d="m12 2 0 2"/><path d="m12 20 0 2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="m2 12 2 0"/><path d="m20 12 2 0"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
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

Sun.displayName = "Sun";

export { Sun };
