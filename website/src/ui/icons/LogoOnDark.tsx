import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";

export interface LogoOnDarkProps {
  size?: number;
}

const LogoOnDark = forwardRef<ElementRef<"svg">, LogoOnDarkProps & ComponentPropsWithoutRef<"svg">>(
  (props, ref) => {
    const { children, className, size, ...rest } = props;

    return (
      <svg
        viewBox="0 0 25 24"
        dangerouslySetInnerHTML={{
          __html:
            '<path fill="none" d="M.064 0h24v24h-24z"/><path d="M15.667 8.281l-1.801 3.121 6.095 10.557h3.603L15.667 8.281zm-11.5 7.438H7.77l6.096-10.558-1.802-3.12-7.897 13.678zm12.191 6.24l-1.801-3.12H2.366l-1.802 3.12h15.794z"/>',
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

LogoOnDark.displayName = "LogoOnDark";

export { LogoOnDark };
