import { memo } from "react";

import Link from "next/link";

import DateFormatter from "@app/components/atoms/DateFormatter/DateFormatter";
import { sitePrefix } from "@app/helpers/util.helpers";
import Post from "@app/types/post";

import { Body, Heading } from "../Typography/Typography";
import styles from "./ArticleCard.module.scss";
import Author from "./components/Author/Author";

interface ArticleCardProps {
  article: Post;
}
const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <Link as={`/posts/${article.slug}`} href="/posts/[slug]">
        <a>
          <div className={styles.imageWrapper}>
            <img src={`${sitePrefix}${article.coverImage}`} alt="" />
          </div>
        </a>
      </Link>

      <Body level={2} className={styles.date}>
        <DateFormatter dateString={article.date} />
      </Body>
      <Heading level={4} className={styles.title}>
        {article.title}
      </Heading>
      <Body level={2} className={styles.excerpt}>
        {article.excerpt}
      </Body>
      <Author picture={article.author.picture} name={article.author.name} />
    </div>
  );
};

export default memo(ArticleCard);
