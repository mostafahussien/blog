import { memo, ReactNode, useContext } from "react";

import Footer from "@app/components/renderings/Footer/Footer";
import Header from "@app/components/renderings/Header/Header";
import { ThemeContext } from "@app/context/ThemeProvider";

import styles from "./DefaultLayout.module.scss";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className={styles.wrapper} data-theme={mode}>
      <Header title="header" />
      <main className={styles.content}>{children}</main>
      <Footer title="footer" />
    </div>
  );
};

export default memo(DefaultLayout);
