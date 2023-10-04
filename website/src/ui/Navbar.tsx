import { forwardRef } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";
import { green } from "tailwindcss/colors";

export const navbar = tv({
  base: "h-header border-b border-solid border-neutral-800  flex fixed top-0 left-0 w-full bg-neutral-950/80 backdrop-blur-sm z-50",
  variants: {
    color: {
        green: "text-green-500",
        grey: "text-grey-500",
        undefined: "",
    }
  }
});

export type NavbarProps = VariantProps<typeof navbar>; 

const _Navbar = forwardRef<ElementRef<"nav">, ComponentPropsWithoutRef<"nav">>((props, ref) => {
  const { children, className, color="green", ...rest } = props;

  return (
    <nav ref={ref} className={navbar({ className, color })} {...rest}>
      {children}
    </nav>
  );
});

export const navbarList = tv({
  base: "flex items-center flex-grow h-full overflow-hidden",
});

export interface NavbarListProps {}

const NavbarList = forwardRef<ElementRef<"ul">, NavbarListProps & ComponentPropsWithoutRef<"ul">>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <ul ref={ref} className={navbarList({ className })} {...rest}>
        {children}
      </ul>
    );
  }
);

export const navbarListItem = tv({
    base: "relative group flex items-center justify-center  before:pointer-events-none before:border first:-ml-[10px]  before:border-neutral-800 before:border-solid  uppercase first:before:border-l before:border-r  hover:before:bg-neutral-800  h-full px-4 cursor-pointer before:absolute  before:-skew-y-12 2 before:-skew-x-12 before:w-full before:z-0  before:h-[200%]",
  });
  
  export interface NavbarListItemProps {}
  
  const NavbarListItem = forwardRef<ElementRef<"li">, NavbarListItemProps & ComponentPropsWithoutRef<"li">>(
    (props, ref) => {
      const { children, className, ...rest } = props;
  
      return (
        <li ref={ref} className={navbarListItem({ className })} {...rest}>
          {children}
        </li>
      );
    }
  );
  
  export const navbarLink = tv({
    base: "group-hover:underline underline-offset-4 relative z-10 h-full flex items-center justify-center",
    variants: {
      active: { true: "underline italic font-bold " },
    },
  });
  
  export interface NavbarLinkProps extends VariantProps<typeof navbarLink> {}
  
  const NavbarLink = forwardRef<ElementRef<"a">, NavbarLinkProps & ComponentPropsWithoutRef<"a">>(
    (props, ref) => {
      const { children, className, active = false, ...rest } = props;
  
      return (
        <a ref={ref} className={navbarLink({ active })} {...rest}>
          {children}
        </a>
      );
    }
  );
  
  export const Navbar = Object.assign(_Navbar, {
    ListItem: NavbarListItem,
    Link: NavbarLink,
    List: NavbarList,
  });