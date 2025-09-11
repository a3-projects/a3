import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Orientation = "horizontal" | "vertical";

interface LayoutDividerProps extends ComponentProps<"div"> {
  dashLength?: number;
  gapLength?: number;
  strokeWidth?: number;
  color?: string;
  orientation?: Orientation;
}

export const LayoutDivider = ({
  className,
  dashLength = 10,
  gapLength = 5,
  strokeWidth = 1,
  color = "currentColor",
  orientation = "horizontal",
  ...props
}: LayoutDividerProps) => {
  const dashArray = `${dashLength} ${gapLength}`;

  const containerClass =
    orientation === "horizontal" ? "flex h-1 w-full items-center" : "flex w-1 h-full justify-center";

  const svgProps =
    orientation === "horizontal"
      ? { width: "100%", height: strokeWidth }
      : { width: strokeWidth, height: "100%" };

  const lineCoords =
    orientation === "horizontal"
      ? { x1: "0", y1: "50%", x2: "100%", y2: "50%" }
      : { x1: "50%", y1: "0", x2: "50%", y2: "100%" };

  return (
    <div className={cn(containerClass, className)} {...props}>
      <svg {...svgProps} className="overflow-visible" preserveAspectRatio="none">
        <line
          className="stroke-border"
          {...lineCoords}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};
