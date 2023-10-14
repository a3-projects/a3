import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";
    
export interface LucideProps {
  size?: number;
};
    
const Lucide = forwardRef<ElementRef<"svg">, LucideProps & ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    const { children, className, size = 24, ...rest } = props;
  
    return (
      <svg
        viewBox="0 0 24 25"
        dangerouslySetInnerHTML={{
          __html: 
            '<path fill="none" d="M0 .804h24v24H0z"/><path d="M15 12.804a1 1 0 01-2 0 3 3 0 10-6 0 7 7 0 1014 0 10.97 10.97 0 00-3.667-8.199 1 1 0 011.334-1.491A12.971 12.971 0 0123 12.804a9 9 0 01-9 9 9 9 0 01-9-9 5 5 0 0110 0z"/><path d="M9 12.804a1 1 0 012 0 3 3 0 106 0 7 7 0 10-14 0c0 3.286 1.441 6.235 3.724 8.25a1.001 1.001 0 01-1.323 1.5A12.968 12.968 0 011 12.804a9 9 0 019-9 9 9 0 019 9 5 5 0 01-10 0z"/>'
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

Lucide.displayName = "Lucide";

export { Lucide };