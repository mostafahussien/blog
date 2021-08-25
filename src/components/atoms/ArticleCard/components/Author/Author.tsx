import { memo } from "react";

import { Body } from "@app/components/atoms/Typography/Typography";
import { sitePrefix } from "@app/helpers/util.helpers";

import styles from "./Author.module.scss";

interface AuthorProps {
  name: string;
  picture: string;
}

const Author = ({ name, picture }: AuthorProps) => {
  return (
    <div className={styles.author}>
      <img
        src={`${sitePrefix}${picture}`}
        alt={name}
        className={styles.image}
      />
      <Body className={styles.name}>{name}</Body>
    </div>
  );
};

export default memo(Author);
