import { NextPage } from "next";

import { memo } from "react";

import DefaultLayout from "@app/components/layouts/DefaultLayout/DefaultLayout";
import ArticlesList from "@app/components/renderings/ArticlesList/ArticlesList";
import Hero from "@app/components/renderings/Hero/Hero";
import { getAllPosts } from "@app/lib/api";
import Post from "@app/types/post";

interface HomeProps {
  allPosts: Post[];
}

const Home: NextPage<HomeProps> = memo(({ allPosts = [] }) => {
  return (
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
  );
});

export default Home;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
