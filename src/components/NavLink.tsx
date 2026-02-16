import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<React.ComponentProps<typeof Link>, "href"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  to?: string;
  href?: string;
  children: ReactNode;
}

const NavLink = ({ className, to, href, children, ...props }: NavLinkCompatProps) => {
  const target = href ?? to ?? "/";
  return (
    <Link href={target} className={cn(className)} {...props}>
      {children}
    </Link>
  );
};

export { NavLink };
