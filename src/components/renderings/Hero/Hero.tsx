import { memo } from "react";

import { Container } from "react-grid-system";

import { Body, Heading } from "@app/components/atoms/Typography/Typography";
import Section from "@app/components/layouts/Section/Section";
import { sitePrefix } from "@app/helpers/util.helpers";
import useTranslation from "@app/hooks/useTranslation";

import styles from "./Hero.module.scss";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Section
      className={styles.hero}
      style={{
        backgroundImage: `url(${sitePrefix}/assets/img/hero/home.png)`,
      }}
    >
      <div className={styles.overlay}>
        <Container>
          <div className={styles.textWrapper}>
            <Heading level={2} className={styles.title}>
              {t("heroTitle")}
            </Heading>
            <Body>{t("heroDescription")}</Body>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default memo(Hero);
