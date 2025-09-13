import { useEffect, useState } from "react";
import type { ComponentPropsWithoutRef, ComponentProps } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

export const navbar = tv({
  base: "h-header flex fixed group/navbar top-0 left-0 w-full duration-1000 z-50 border-b border-solid",
  variants: {
    isBackgroundVisible: {
      true: "bg-back/70 backdrop-blur-sm border-border",
      false: " bg-transparent border-transparent",
    },
  },
});

export interface NavbarProps extends VariantProps<typeof navbar> {}

const _Navbar = (props: NavbarProps & ComponentPropsWithoutRef<"nav">) => {
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
    <nav
      data-navbar-visible={isBackgroundVisible}
      className={navbar({ className, isBackgroundVisible })}
      {...rest}
    >
      {children}
    </nav>
  );
};

export const navbarList = tv({
  base: "flex items-center flex-grow h-full overflow-hidden",
});

export interface NavbarListProps extends VariantProps<typeof navbarList> {}

const NavbarList = (props: NavbarListProps & ComponentPropsWithoutRef<"ul">) => {
  const { children, className, ...rest } = props;

  return (
    <ul className={navbarList({ className })} {...rest}>
      {children}
    </ul>
  );
};

export const navbarListItem = tv({
  base: "relative group flex items-center justify-center  before:pointer-events-none first:-ml-[10px]  hover:before:bg-border  h-full px-4 cursor-pointer before:absolute  before:-skew-y-12 2 before:-skew-x-12 before:w-full before:z-0  before:h-[200%]",
});

export interface NavbarListItemProps extends VariantProps<typeof navbarListItem> {}

const NavbarListItem = (props: NavbarListItemProps & ComponentProps<"li">) => {
  const { children, className, ...rest } = props;

  return (
    <li className={navbarListItem({ className })} {...rest}>
      {children}
    </li>
  );
};

export const navbarLink = tv({
  base: "group-hover:underline underline-offset-4 relative z-10 h-full w-full flex items-center justify-center",
  variants: {
    active: { true: "underline italic font-bold " },
  },
});

export interface NavbarLinkProps extends VariantProps<typeof navbarLink> {}

const NavbarLink = (props: NavbarLinkProps & ComponentProps<"a">) => {
  const { children, className, active = false, ...rest } = props;

  return (
    <a className={navbarLink({ className, active })} {...rest}>
      {children}
    </a>
  );
};

export const Navbar = Object.assign(_Navbar, {
  ListItem: NavbarListItem,
  Link: NavbarLink,
  List: NavbarList,
});
