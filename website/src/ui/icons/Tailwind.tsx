import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";

export interface TailwindProps {
  size?: number;
}

const Tailwind = forwardRef<ElementRef<"svg">, TailwindProps & ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    const { children, className, size = 24, ...rest } = props;

    return (
      <svg
        viewBox="0 0 25 25"
        dangerouslySetInnerHTML={{
          __html:
            '<path fill="none" d="M.126.414h24v24h-24z"/><path d="M12.126 5.386c-3.066 0-4.983 1.534-5.75 4.6 1.15-1.533 2.492-2.108 4.025-1.725.875.219 1.501.854 2.193 1.556 1.127 1.145 2.432 2.469 5.282 2.469 3.067 0 4.984-1.533 5.75-4.6-1.15 1.534-2.491 2.109-4.025 1.725-.874-.218-1.5-.853-2.192-1.556-1.127-1.144-2.432-2.469-5.283-2.469zm-5.75 6.9c-3.066 0-4.983 1.534-5.75 4.6 1.15-1.533 2.492-2.108 4.025-1.725.875.219 1.501.854 2.193 1.556 1.127 1.145 2.432 2.469 5.282 2.469 3.067 0 4.984-1.533 5.75-4.6-1.15 1.534-2.491 2.109-4.025 1.725-.874-.218-1.5-.853-2.192-1.556-1.127-1.144-2.432-2.469-5.283-2.469z"/>',
        }}
        ref={ref}
        className={cn("fill-current", className)}
        width={size}
        height={size}
        {...rest}
      >
        {children}
      </svg>
    );
  }
);

Tailwind.displayName = "Tailwind";

export { Tailwind };
