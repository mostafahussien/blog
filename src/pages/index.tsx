import { NextPage } from "next";

import { memo } from "react";

import Link from "next/link";

import DefaultLayout from "@app/components/layouts/DefaultLayout/DefaultLayout";
import { sitePrefix } from "@app/helpers/util.helpers";
import { getAllPosts } from "@app/lib/api";
import Post from "@app/types/post";

interface HomeProps {
  allPosts: Post[];
}

const Home: NextPage<HomeProps> = memo(({ allPosts = [] }) => {
  return (
    <DefaultLayout>
      <div>
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
      </div>
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
