import { tv, type VariantProps } from "tailwind-variants";

const dotsBackground = tv({
  base: "absolute inset-0 z-0",
  variants: {
    color: {
      primary: "bg-dots-primary-back/10",
      border: "bg-dots-border/15",
    },
  },
});
interface DotsBackground extends VariantProps<typeof dotsBackground> {
  cornerOnly?: boolean;
}
export const DotsBackground = ({
  className,
  color,
  cornerOnly = false,
  ...props
}: DotsBackground & React.ComponentProps<"div">) => {
  return (
    <div
      className={dotsBackground({ className, color })}
      style={
        cornerOnly
          ? {
              mask: "radial-gradient(circle at bottom left, rgba(0,0,0,1) 25%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 85%)",
              WebkitMask:
                "radial-gradient(circle at bottom left, rgba(0,0,0,1) 25%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 85%)",
            }
          : {}
      }
      {...props}
    />
  );
};
