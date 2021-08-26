import { GetStaticProps, NextPage } from "next";

import { memo, useEffect } from "react";

import { useRouter } from "next/router";
import { Container } from "react-grid-system";

import ArticleBody from "@app/components/atoms/ArticleBody/ArticleBody";
import DefaultLayout from "@app/components/layouts/DefaultLayout/DefaultLayout";
import {
  LanguageProvider,
  getLocalizationProps,
} from "@app/context/LanguageContext";
import { getAllPosts, getPostBySlug } from "@app/lib/api";
import markdownToHtml from "@app/lib/markdownToHtml";
import { locales } from "@app/translations/config";
import { Localization } from "@app/translations/types";
import PostType from "@app/types/post";

interface PostProps {
  post: PostType;
  localization: Localization;
}

const Post: NextPage<PostProps> = memo(({ post, localization }: PostProps) => {
  const router = useRouter();

  useEffect(() => {
    if (localization.locale !== post.lang)
      router.push(`/${localization.locale}`);
  }, [router, localization.locale, post.lang]);

  return !post ? null : (
    <LanguageProvider localization={localization}>
      <DefaultLayout>
        <Container>
          {!!post.content && <ArticleBody content={post.content} />}
        </Container>
      </DefaultLayout>
    </LanguageProvider>
  );
});

export default Post;

export const getStaticProps: GetStaticProps = async ctx => {
  const localization = getLocalizationProps(ctx, "home");

  const { params } = ctx;

  try {
    const post = getPostBySlug(params.slug as string, [
      "title",
      "lang",
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
        localization,
      },
    };
  } catch (err) {
    return { props: { errors: err.message, localization } };
  }
};

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  const paths = posts.flatMap(post =>
    locales.flatMap(lang => ({
      params: { lang, slug: post.slug },
    }))
  );

  return { paths, fallback: false };
}
