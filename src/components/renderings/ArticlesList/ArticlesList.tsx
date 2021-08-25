import { memo } from "react";

import { Col, Container, Row } from "react-grid-system";

import ArticleCard from "@app/components/atoms/ArticleCard/ArticleCard";
import Section from "@app/components/layouts/Section/Section";
import Post from "@app/types/post";

interface ArticlesListProps {
  posts: Post[];
}

const ArticlesList = ({ posts = [] }: ArticlesListProps) => {
  return (
    <Section>
      <Container>
        <Row>
          {posts.length > 0 &&
            posts.map(post => (
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
