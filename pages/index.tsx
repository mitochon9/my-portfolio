import type { CustomNextPage, GetStaticProps } from "next";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { client } from "src/component/libs/client";
import { blogDataState } from "src/component/state/blogDataAtom";
import { FluidLayout } from "src/layout";
import { Index } from "src/pages/index";

const IndexPage: CustomNextPage = ({ blog }: any) => {
  const setBlogData = useSetRecoilState(blogDataState);
  useEffect(() => {
    setBlogData(blog);
  }, [blog, setBlogData]);

  return (
    <FluidLayout>
      <Index />
    </FluidLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
    queries: { orders: "-publishedAt", limit: 4 },
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default IndexPage;
