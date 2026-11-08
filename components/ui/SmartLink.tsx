import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isExternal } from "@/content/site";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

/** next/link for internal routes, <a> for mailto/tel/external (external opens in a new tab). */
export default function SmartLink({ href, children, ...rest }: Props) {
  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  const external = isExternal(href);
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {children}
    </a>
  );
}
