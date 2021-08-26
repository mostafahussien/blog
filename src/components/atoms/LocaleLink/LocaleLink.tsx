import Link, { LinkProps } from "next/link";

import useTranslation from "@app/hooks/useTranslation";

const LocaleLink: React.FC<LinkProps> = props => {
  const { locale } = useTranslation();

  const { as, href } = props;

  const localized = {
    ...props,
    as: `/${locale}${as}`,
    href: `/${locale}${href}`,
  };

  return <Link {...localized} />;
};

export default LocaleLink;
