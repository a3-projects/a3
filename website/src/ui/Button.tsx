import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const button = tv({
  base: "relative cursor-pointer inline-flex items-center justify-center transition-all text-fl-sm  font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default:
        "bg-primary-600 text-neutral-50 hover:bg-neutral-50 hover:text-black hover:shadow-lg hover:shadow-primary-500",
      destructive: "bg-destructive-500 text-destructive-500 hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-secondary hover:text-secondary-500",
      secondary: "bg-secondary-600 text-white hover:bg-white hover:text-black",
      ghost: "hover:bg-secondary hover:text-secondary-500",
      neutral: "bg-neutral-950 text-neutral-50 hover:bg-neutral-50 hover:text-neutral-950 hover:shadow-lg",
      neutralOnDark:
        "bg-neutral-50 text-neutral-950 hover:bg-neutral-950 hover:text-neutral-50 hover:shadow-lg ",
      link: "text-primary underline-offset-4 hover:underline",
    },
    increaseHitbox: {
      true: "before:absolute before:h-[calc(100%+1rem)] relative before:w-[calc(100%+1rem)]",
    },
    color: {},
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9  px-3",
      lg: "h-12 px-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    animated: false,
    increaseHitbox: false,
  },
});

export interface ButtonProps extends VariantProps<typeof button> {}

const Button = forwardRef<ElementRef<"button">, ButtonProps & ComponentPropsWithoutRef<"button">>(
  (props, ref) => {
    const { children, className, variant, size, increaseHitbox, ...rest } = props;

    return (
      <button ref={ref} className={button({ className, variant, size, increaseHitbox })} {...rest}>
        {children}
      </button>
    );
  }
);

export { Button };
