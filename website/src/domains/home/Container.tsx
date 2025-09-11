import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export const Container = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("mx-auto w-full max-w-7xl px-6", className)} {...props} />;
};
