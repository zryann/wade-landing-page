import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "to"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  to: string;
  children: ReactNode;
}

const NavLink = ({ className, activeClassName, pendingClassName, to, children, ...props }: NavLinkCompatProps) => (
  <RouterNavLink
    to={to}
    className={({ isActive, isPending }) =>
      cn(className, isActive && activeClassName, isPending && pendingClassName)
    }
    {...props}
  >
    {children}
  </RouterNavLink>
);

export { NavLink };
