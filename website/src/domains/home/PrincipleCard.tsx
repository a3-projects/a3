import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const principleCard = tv({
  base: "aspect-square max-w-xs lg:max-w-sm justify-between flex flex-col relative group",
});

export interface PrincipleCardProps extends VariantProps<typeof principleCard> {}

const _PrincipleCard = forwardRef<ElementRef<"div">, PrincipleCardProps & ComponentPropsWithoutRef<"div">>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <div ref={ref} className={principleCard({ className })} {...rest}>
        {children}
      </div>
    );
  }
);

export const body = tv({
  base: "p-5 md:p-8  h-full w-full flex flex-col gap-4 lg:gap-12 bg-neutral-900/70 backdrop-blur-sm",
});

export interface BodyProps extends VariantProps<typeof body> {}

const Body = forwardRef<ElementRef<"div">, BodyProps & ComponentPropsWithoutRef<"div">>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div ref={ref} className={body({ className })} {...rest}>
      {children}
    </div>
  );
});

export const border = tv({
  base: "w-[calc(100%+20px)] h-[calc(100%+20px)] transition-all duration-1000  border border-solid border-primary-500/0 group-hover:border-primary-500 group-hover:-translate-y-[10px] group-hover:-translate-x-[10px] absolute",
  variants: {
    position: {
      "top-left": "-translate-y-1/4 -translate-x-1/4",
      "top-right": "-translate-y-1/4 translate-x-1/4",
      "bottom-left": "translate-y-1/4 -translate-x-1/4",
      "bottom-right": "translate-y-1/4 translate-x-1/4",
    },
  },
});

export interface BorderProps extends VariantProps<typeof border> {}

const Border = forwardRef<ElementRef<"div">, BorderProps & ComponentPropsWithoutRef<"div">>((props, ref) => {
  const { children, className, position, ...rest } = props;

  return (
    <div ref={ref} aria-hidden="true" className={border({ className, position })} {...rest}>
      {children}
    </div>
  );
});

export const PrincipleCard = Object.assign(_PrincipleCard, { Body, Border });
