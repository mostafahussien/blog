import styles from "./ArticleBody.module.scss";

interface ArticleBodyProps {
  content: string;
}

const ArticleBody = ({ content }: ArticleBodyProps) => {
  return (
    <div className={styles.article}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ArticleBody;
