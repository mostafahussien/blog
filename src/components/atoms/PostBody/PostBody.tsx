import styles from "./PostBody.module.scss";

interface PostBodyProps {
  content: string;
}

const PostBody = ({ content }: PostBodyProps) => {
  return (
    <div className={styles.article}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
