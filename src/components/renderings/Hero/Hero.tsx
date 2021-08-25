import { memo } from "react";

import { Container } from "react-grid-system";

import { Body, Heading } from "@app/components/atoms/Typography/Typography";
import Section from "@app/components/layouts/Section/Section";
import { sitePrefix } from "@app/helpers/util.helpers";

import styles from "./Hero.module.scss";

const Hero = () => {
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
              Welcome to Monstarlab's Engineering Blog
            </Heading>
            <Body>
              We love engaging with the tech community, and we are big consumers
              of the awesome work that people share online.
            </Body>
            <Body>
              Here we are going give back a little and share our tech knowledge
              about all things we do at Monstarlab.
            </Body>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default memo(Hero);
