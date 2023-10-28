import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";

export interface LogoOutlineProps {
  size?: number;
}

const LogoOutline = forwardRef<ElementRef<"svg">, LogoOutlineProps & ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    const { children, className, size, ...rest } = props;

    return (
      <svg
        viewBox="0 0 25 24"
        dangerouslySetInnerHTML={{
          __html:
            '<path fill="none" d="M.885 0h24v24h-24z"/><path d="M16.488 8.281l7.897 13.678h-3.603l-6.096-10.557 1.802-3.121zm0 .693l-1.402 2.428 5.896 10.211h2.803L16.488 8.974zm-11.5 6.745l7.897-13.678 1.801 3.12-6.095 10.558H4.988zm.599-.347h2.804l5.896-10.211-1.402-2.428-7.298 12.639zm11.592 6.587H1.385l1.801-3.12h12.191l1.802 3.12zm-.6-.346l-1.402-2.428H3.386l-1.402 2.428h14.595z"/>',
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

LogoOutline.displayName = "LogoOutline";

export { LogoOutline };
