import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";

export interface LogoDotsProps {
  dotSize?: number;
  dotSpacing?: number;
  bgDotColor?: string;
  logoDotColor?: string;
  logoSize?: number;
  logoPercentage?: number;
}

const LogoDots = forwardRef<ElementRef<"div">, LogoDotsProps & ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    const {
      className,
      dotSize = 2,
      dotSpacing = 8,
      bgDotColor = "var(--color-muted-front)",
      logoDotColor = "rgb(59 130 246 / 0.3)",
      logoSize = 300,
      logoPercentage = 80,
      ...rest
    } = props;

    // Logo path data
    const logoPath =
      "M15.667 8.281l-1.801 3.121 6.095 10.557h3.603L15.667 8.281zm-11.5 7.438H7.77l6.096-10.558-1.802-3.12-7.897 13.678zm12.191 6.24l-1.801-3.12H2.366l-1.802 3.12h15.794z";

    return (
      <div ref={ref} className={cn("absolute inset-0 overflow-hidden", className)} {...rest}>
        {/* Background dots grid */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, ${bgDotColor} ${dotSize}px, transparent ${dotSize}px)`,
            backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
          }}
        />

        {/* Logo dots - positioned to align with background grid */}
        <div
          className="absolute inset-0 -right-1/2"
          style={{
            background: `radial-gradient(circle at center, ${logoDotColor} ${dotSize}px, transparent ${dotSize}px)`,
            backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
            mask: `url("data:image/svg+xml,${encodeURIComponent(`
              <svg viewBox='0 0 25 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='${logoPath}' fill='white'/>
              </svg>
            `)}")`,
            maskSize: `${logoPercentage}% ${logoPercentage * 0.96}%`,
            maskRepeat: "no-repeat",
            maskPosition: "center center",
            WebkitMask: `url("data:image/svg+xml,${encodeURIComponent(`
              <svg viewBox='0 0 25 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='${logoPath}' fill='white'/>
              </svg>
            `)}")`,
            WebkitMaskSize: `${logoPercentage}% ${logoPercentage * 0.96}%`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center center",
            opacity: 0.6,
          }}
        />
      </div>
    );
  }
);

LogoDots.displayName = "LogoDots";

export { LogoDots };
