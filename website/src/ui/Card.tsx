import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const card = tv({
  base: "",
  variants: {
    color: {
      default: "bg-neutral-800/20 backdrop-blur-sm",
      transparent: "bg-transparent",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

export interface CardProps extends VariantProps<typeof card> {}

const _Card = forwardRef<ElementRef<"div">, CardProps & ComponentPropsWithoutRef<"div">>((props, ref) => {
  const { children, className, color, ...rest } = props;

  return (
    <div ref={ref} className={card({ className, color })} {...rest}>
      {children}
    </div>
  );
});

export const cardHeader = tv({
  base: "px-4 lg:px-8 pt-8 pb-4",
});

export interface CardHeaderProps extends VariantProps<typeof cardHeader> {}

const CardHeader = forwardRef<ElementRef<"div">, CardHeaderProps & ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <div ref={ref} className={cardHeader({ className })} {...rest}>
        {children}
      </div>
    );
  }
);

export const cardBody = tv({
  base: "px-4 lg:px-8 py-4",
});

export interface CardBodyProps extends VariantProps<typeof cardBody> {}

const CardBody = forwardRef<ElementRef<"div">, CardBodyProps & ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <div ref={ref} className={cardBody({ className })} {...rest}>
        {children}
      </div>
    );
  }
);

export const cardFooter = tv({
  base: "px-4 lg:px-8 py-4",
});

export interface CardFooterProps extends VariantProps<typeof cardFooter> {}

const CardFooter = forwardRef<ElementRef<"div">, CardFooterProps & ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <div ref={ref} className={cardFooter({ className })} {...rest}>
        {children}
      </div>
    );
  }
);

export const Card = Object.assign(_Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
