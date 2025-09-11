import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const main = tv({
  base: "flex-grow",
  variants: {
    hasHeader: { true: "pt-header" },
  },
});

export interface MainProps extends VariantProps<typeof main> {}

export const Main = (props: MainProps & ComponentProps<"main">) => {
  const { children, className, hasHeader = true, ref, ...rest } = props;

  return (
    <main ref={ref} className={main({ className, hasHeader })} {...rest}>
      {children}
    </main>
  );
};
