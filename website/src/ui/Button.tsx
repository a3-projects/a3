import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const button = tv({
  base: "inline-flex items-center justify-center transition-all border-4 border-primary-500 text-sm font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary-600 text-neutral-50 hover:bg-primary-600/90 shadow-lg shadow-primary-600/50",
      destructive: "bg-destructive-500 text-destructive-500 hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-secondary hover:text-secondary-500",
      secondary: "bg-secondary text-secondary-500 hover:bg-secondary/80",
      ghost: "hover:bg-secondary hover:text-secondary-500",
      link: "text-primary underline-offset-4 hover:underline",
    },
    animated: {
      true: "duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-primary-500/80",
    },
    color: {},
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9  px-3",
      lg: "h-14 px-8 text-lg",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps extends VariantProps<typeof button> {}

const Button = forwardRef<ElementRef<"button">, ButtonProps & ComponentPropsWithoutRef<"button">>(
  (props, ref) => {
    const { children, className, variant = "default", size = "default", animated = false, ...rest } = props;

    return (
      <button ref={ref} className={button({ className, variant, size, animated })} {...rest}>
        {children}
      </button>
    );
  }
);

export { Button };
