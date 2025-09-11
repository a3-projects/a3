import { Container } from "@/domains/home/Container";
import { LayoutDivider } from "@/domains/home/LayoutDivider";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export const LayoutBox = ({ className, children, ...props }: ComponentProps<typeof Container>) => {
  return (
    <Container
      className={cn("absolute top-1/2 left-1/2 flex h-full -translate-1/2 justify-between p-0", className)}
      {...props}
    >
      <LayoutDivider orientation="vertical" />
      <LayoutDivider orientation="vertical" />
    </Container>
  );
};
