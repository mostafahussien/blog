import { NextPage } from "next";

import { memo } from "react";

import Link from "next/link";

import { getAllPosts } from "@app/lib/api";
import Post from "@app/types/post";

interface HomeProps {
  allPosts: Post[];
}

const Home: NextPage<HomeProps> = memo(({ allPosts = [] }) => {
  return (
    <div>
      {allPosts.length > 0 &&
        allPosts.map(post => (
          <div key={post.slug}>
            <img src={post.coverImage} alt="" />
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a className="hover:underline">{post.title}</a>
            </Link>
          </div>
        ))}
    </div>
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
