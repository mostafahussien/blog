import { NextPage } from "next";

import { memo } from "react";

import { Container } from "react-grid-system";

import PostBody from "@app/components/atoms/PostBody/PostBody";
import DefaultLayout from "@app/components/layouts/DefaultLayout/DefaultLayout";
import { getAllPosts, getPostBySlug } from "@app/lib/api";
import markdownToHtml from "@app/lib/markdownToHtml";
import PostType from "@app/types/post";

interface PostProps {
  post: PostType;
}

const Post: NextPage<PostProps> = memo(({ post }: PostProps) => {
  console.log(post);
  return (
    <DefaultLayout>
      <Container>
        {!!post.content && <PostBody content={post.content} />}
      </Container>
    </DefaultLayout>
  );
});

export default Post;

interface Params {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
