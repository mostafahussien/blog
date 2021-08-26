import { memo } from "react";

import { Col, Container, Row } from "react-grid-system";

import ArticleCard from "@app/components/atoms/ArticleCard/ArticleCard";
import Section from "@app/components/layouts/Section/Section";
import useTranslation from "@app/hooks/useTranslation";
import Post from "@app/types/post";

interface ArticlesListProps {
  posts: Post[];
}

const ArticlesList = ({ posts = [] }: ArticlesListProps) => {
  const { locale } = useTranslation();

  const localePosts = posts.filter(post => post.lang === locale);

  return (
    <Section>
      <Container>
        <Row>
          {localePosts.length > 0 &&
            localePosts.map(post => (
              <Col xs={12} lg={4} key={post.slug}>
                <ArticleCard article={post} />
              </Col>
            ))}
        </Row>
      </Container>
    </Section>
  );
};

export default memo(ArticlesList);
