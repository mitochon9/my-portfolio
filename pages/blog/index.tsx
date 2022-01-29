import type { CustomNextPage, GetStaticProps } from "next";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { client } from "src/component/libs/client";
import { blogDataState } from "src/component/state/blogDataAtom";
import { FluidLayout } from "src/layout";
import { Blog } from "src/pages/blog";

const BlogPage: CustomNextPage = ({ blog }: any) => {
  const setBlogData = useSetRecoilState(blogDataState);

  useEffect(() => {
    setBlogData(blog);
  }, [blog, setBlogData]);

  return (
    <FluidLayout>
      <Blog />;
    </FluidLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
    queries: { orders: "-publishedAt" },
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default BlogPage;
