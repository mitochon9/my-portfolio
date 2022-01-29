import { format } from "date-fns";
import Image from "next/image";

export const BlogId = ({ blog }: any) => (
  <article className="py-8 bg-gray-100 rounded">
    <div className="flex justify-between items-center px-2">
      <div className="py-1 px-2 text-gray-50 bg-green-600 rounded">{blog.category.name}</div>
      <p>
        投稿日：{format(new Date(blog.publishedAt), "yyyy-MM-dd")} 更新日：
        {format(new Date(blog.updatedAt), "yyyy-MM-dd")}
      </p>
    </div>

    <h1 className="px-2 mt-4 text-3xl italic font-bold text-gray-700 border-b-8 border-green-500">{blog.title}</h1>

    <div className="px-2 mt-4">
      {blog.thumbnail ? (
        <div className="text-center">
          <Image
            src={blog.thumbnail.url}
            alt="サムネイル画像"
            width={400}
            height={240}
            objectFit="cover"
            className="rounded-xl opacity-90 group-hover:opacity-100 duration-150 group-hover:scale-110"
          />
        </div>
      ) : null}

      <div
        className="mt-8"
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line @typescript-eslint/naming-convention
          __html: `${blog.body}`,
        }}
      />
    </div>
  </article>
);
