import { memo } from "react";

import cx from "classnames";
import { useRouter } from "next/router";

import styles from "./Section.module.scss";

export type SectionProps = React.HTMLAttributes<HTMLElement>;

const Section = ({ children, className, ...rest }: SectionProps) => {
  const router = useRouter();

  const { locale } = router;

  return (
    <section
      className={cx(styles.container, className)}
      {...rest}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {children}
    </section>
  );
};

export default memo(Section);
