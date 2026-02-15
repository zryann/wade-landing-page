import Link, { LinkProps } from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  href: LinkProps["href"];
  children: ReactNode;
}

const NavLink = ({ className, activeClassName, pendingClassName, href, children, ...props }: NavLinkCompatProps) => (
  <Link href={href} className={cn(className, activeClassName, pendingClassName)} {...props}>
    {children}
  </Link>
);

export { NavLink };
