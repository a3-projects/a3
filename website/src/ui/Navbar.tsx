import { forwardRef, useEffect, useState } from "react";
import type { ElementRef, ComponentPropsWithoutRef } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const navbar = tv({
  base: "h-header flex fixed top-0 left-0 w-full transition-all duration-1000 z-50 border-b border-solid ",
  variants: {
    isBackgroundVisible: {
      true: "bg-black/70 backdrop-blur-sm border-neutral-900",
      false: " bg-transparent border-transparent",
    },
  },
});

export interface NavbarProps extends VariantProps<typeof navbar> {}

const _Navbar = forwardRef<ElementRef<"nav">, NavbarProps & ComponentPropsWithoutRef<"nav">>((props, ref) => {
  const { children, className, ...rest } = props;
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 60 && !isBackgroundVisible) {
      setIsBackgroundVisible(true);
    } else if (isBackgroundVisible && window.scrollY < 60) {
      setIsBackgroundVisible(false);
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav ref={ref} className={navbar({ className, isBackgroundVisible })} {...rest}>
      {children}
    </nav>
  );
});

export const navbarList = tv({
  base: "flex items-center flex-grow h-full overflow-hidden",
});

export interface NavbarListProps extends VariantProps<typeof navbarList> {}

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
  base: "relative group flex items-center justify-center  before:pointer-events-none first:-ml-[10px] uppercase hover:before:bg-neutral-800  h-full px-4 cursor-pointer before:absolute  before:-skew-y-12 2 before:-skew-x-12 before:w-full before:z-0  before:h-[200%]",
});

export interface NavbarListItemProps extends VariantProps<typeof navbarListItem> {}

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
  base: "group-hover:underline hover:text-white  text-neutral-50 underline-offset-4 relative z-10 h-full w-full flex items-center justify-center",
  variants: {
    active: { true: "underline italic font-bold " },
  },
});

export interface NavbarLinkProps extends VariantProps<typeof navbarLink> {}

const NavbarLink = forwardRef<ElementRef<"a">, NavbarLinkProps & ComponentPropsWithoutRef<"a">>(
  (props, ref) => {
    const { children, className, active = false, ...rest } = props;

    return (
      <a ref={ref} className={navbarLink({ className, active })} {...rest}>
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
