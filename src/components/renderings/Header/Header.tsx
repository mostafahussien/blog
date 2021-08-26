import { memo, useContext } from "react";

import Link from "next/link";
import { Container, Row } from "react-grid-system";

import LocaleLink from "@app/components/atoms/LocaleLink/LocaleLink";
import LocaleSwitcher from "@app/components/atoms/LocaleSwitcher/LocaleSwitcher";
import { ThemeContext } from "@app/context/ThemeProvider";
import { sitePrefix } from "@app/helpers/util.helpers";
import useTranslation from "@app/hooks/useTranslation";

import styles from "./Header.module.scss";

export interface HeaderProps {
  title?: string;
  menuLinksCollection?: {
    items: {
      sys: {
        id: string;
      };
      label: string;
      link: string;
    }[];
  };
}
const Header = ({ menuLinksCollection }: HeaderProps) => {
  const { locale } = useTranslation();

  const { mode, setTheme } = useContext(ThemeContext);

  const darkModeLogo = "/assets/img/logo/ml-logo-yellow.png";

  const lightModeLogo = "/assets/img/logo/ml-logo-grey.png";

  const logo = mode === "dark" ? darkModeLogo : lightModeLogo;

  return (
    <header className={styles.header}>
      <Container>
        <Row justify="between" align="center" className={styles.headerWrapper}>
          <Link href={`/${locale}`}>
            <a>
              <img
                className={styles.logo}
                src={`${sitePrefix}${logo}`}
                alt=""
              />
            </a>
          </Link>
          <button className={styles.button} onClick={setTheme}>
            Switch DarkMode
          </button>
          {menuLinksCollection?.items && (
            <ul>
              {menuLinksCollection.items.map(item => (
                <li key={item.sys.id}>
                  <Link href={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          )}
          <LocaleSwitcher />
        </Row>
      </Container>
    </header>
  );
};

export default memo(Header);
