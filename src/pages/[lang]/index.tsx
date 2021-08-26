import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { memo } from "react";

import DefaultLayout from "@app/components/layouts/DefaultLayout/DefaultLayout";
import ArticlesList from "@app/components/renderings/ArticlesList/ArticlesList";
import Hero from "@app/components/renderings/Hero/Hero";
import {
  LanguageProvider,
  getLocalizationProps,
} from "@app/context/LanguageContext";
import { getAllPosts } from "@app/lib/api";
import { locales } from "@app/translations/config";
import { Localization } from "@app/translations/types";
import Post from "@app/types/post";

interface HomeProps {
  allPosts: Post[];
  localization: Localization;
}

const Home: NextPage<HomeProps> = memo(({ localization, allPosts = [] }) => {
  return (
    <LanguageProvider localization={localization}>
      <DefaultLayout>
        <Hero />
        <ArticlesList posts={allPosts} />
        {/* <div>
        <h1>Home</h1>
        {allPosts.length > 0 &&
          allPosts.map(post => (
            <div key={post.slug}>
              <img src={`${sitePrefix}${post.coverImage}`} alt="" />
              <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                <a className="hover:underline">{post.title}</a>
              </Link>
            </div>
          ))}
      </div> */}
      </DefaultLayout>
    </LanguageProvider>
  );
});

export default Home;

export const getStaticProps: GetStaticProps = async ctx => {
  const localization = getLocalizationProps(ctx, "home");

  const allPosts = getAllPosts([
    "title",
    "lang",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { localization, allPosts },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: locales.map(lang => ({ params: { lang } })),
    fallback: false,
  };
};
