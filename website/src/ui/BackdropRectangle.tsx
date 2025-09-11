import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const backdropRectangle = tv({
  slots: {
    base: "relative group bg-red-500 backdrop-blur-sm ",
    rectangle:
      "border border-solid border-primary-500 w-full h-full absolute -translate-x-1/4 -translate-y-1/4  group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-1000 ease-in-out",
    front: "z-10",
  },
});

export interface BackdropRectangleProps extends VariantProps<typeof backdropRectangle> {}

const BackdropRectangle = (props: BackdropRectangleProps & ComponentProps<"div">) => {
  const { children, className, ref, ...rest } = props;
  const { base, rectangle } = backdropRectangle({ className });
  return (
    <div ref={ref} className={base({ className })} {...rest}>
      <div className={rectangle()}></div>

      {children}
    </div>
  );
};

export { BackdropRectangle };
