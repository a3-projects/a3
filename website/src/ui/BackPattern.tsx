import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const backPattern = tv({
  slots: {
    base: "flex  border border-solid ",
    body: "transform translate-x-2 -translate-y-2",
  },
  variants: {
    color: {
      default: {
        base: "heropattern-diagonallines-primary-600 border-primary-600",
      },
      secondary: {
        base: "heropattern-diagonallines-secondary-600 border-secondary-600",
      },
      neutral: {
        base: "heropattern-diagonallines-neutral-950 border-neutral-950",
      },
      neutralOnDark: {
        base: "heropattern-diagonallines-neutral-50 border-neutral-50",
      },
    },
    animated: {
      true: {
        body: "transition-all hover hover:translate-x-0 hover:-translate-y-0",
      },
    },
  },
  defaultVariants: {
    color: "default",
    animated: false,
  },
});

export interface BackPatternProps extends VariantProps<typeof backPattern> {}

const BackPattern = forwardRef<ElementRef<"div">, BackPatternProps & ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    const { children, className, animated, color, ...rest } = props;

    const { base, body } = backPattern({ animated, color });
    return (
      <div ref={ref} className={base({ className })} {...rest}>
        <div className={body()}>{children}</div>
      </div>
    );
  }
);

export { BackPattern };
