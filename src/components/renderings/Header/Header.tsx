import { memo } from "react";

import { useRouter } from "next/router";

import Link from "@app/components/atoms/Link/Link";

export interface HeaderProps {
  title: string;
  menuLinksCollection: {
    items: {
      sys: {
        id: string;
      };
      label: string;
      link: string;
    }[];
  };
}
const Header = ({ title, menuLinksCollection }: HeaderProps) => {
  const router = useRouter();

  const languageSwitch = (lang: string) => {
    router.push(router.asPath, router.asPath, { locale: lang });
  };
  return (
    <header>
      <div>{title}</div>
      {menuLinksCollection.items && (
        <ul>
          {menuLinksCollection.items.map(item => (
            <li key={item.sys.id}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => languageSwitch("en-US")}>english</button>
      <button onClick={() => languageSwitch("ar")}>arabic</button>
    </header>
  );
};

export default memo(Header);
