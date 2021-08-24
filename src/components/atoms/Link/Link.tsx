import { memo, ReactNode } from "react";

import NextLink, { LinkProps } from "next/link";

import { isURL } from "@app/helpers/util.helpers";

interface ILink extends LinkProps {
  children: ReactNode;
  className?: string | undefined;
  role?: string | undefined;
  tabIndex?: number | undefined;
  title?: string;
}

const Link = ({ children, className, href, role, tabIndex, title }: ILink) => {
  return (
    <NextLink href={href}>
      <a
        className={className}
        title={title}
        target={isURL(href) ? "_blank" : "_self"}
        rel={isURL(href) ? "noopener" : ""}
        role={role}
        tabIndex={tabIndex}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default memo(Link);
