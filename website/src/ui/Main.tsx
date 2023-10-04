import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const main = tv({
  base: "flex-grow",
  variants: {
    hasHeader: { true: "pt-header" },
  },
});

export interface MainProps extends VariantProps<typeof main> {}

export const Main = forwardRef<ElementRef<"main">, MainProps & ComponentPropsWithoutRef<"main">>(
  (props, ref) => {
    const { children, className, hasHeader = true, ...rest } = props;

    return (
      <main ref={ref} className={main({ className, hasHeader })} {...rest}>
        {children}
      </main>
    );
  }
);
