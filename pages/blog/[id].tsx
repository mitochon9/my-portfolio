import type { CustomNextPage, GetStaticPaths } from "next";
import { client } from "src/component/libs/client";
import { FluidLayout } from "src/layout";
import { BlogId } from "src/pages/blog/[id]";

const BlogIdPage: CustomNextPage = ({ blog }: any) => (
  <FluidLayout>
    <BlogId blog={blog} />
  </FluidLayout>
);

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

BlogIdPage.getLayout = FluidLayout;

export default BlogIdPage;
