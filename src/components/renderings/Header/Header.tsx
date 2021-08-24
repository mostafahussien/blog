import { memo, useContext } from "react";

import { Container, Row } from "react-grid-system";

import Link from "@app/components/atoms/Link/Link";
import { ThemeContext } from "@app/context/ThemeProvider";
import { sitePrefix } from "@app/helpers/util.helpers";

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
  const { mode, setTheme } = useContext(ThemeContext);

  const darkModeLogo = "/assets/img/logo/ml-logo-yellow.png";

  const lightModeLogo = "/assets/img/logo/ml-logo-grey.png";

  const logo = mode === "dark" ? darkModeLogo : lightModeLogo;

  return (
    <header className={styles.header}>
      <Container>
        <Row justify="between" align="center" className={styles.headerWrapper}>
          <img className={styles.logo} src={`${sitePrefix}${logo}`} alt="" />
          <button className={styles.button} onClick={setTheme}>
            switch darkmode
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
        </Row>
      </Container>
    </header>
  );
};

export default memo(Header);
