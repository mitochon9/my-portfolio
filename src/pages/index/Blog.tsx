import { format } from "date-fns";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { LinkButton } from "src/component/Button";
import { blogDataState } from "src/component/state/blogDataAtom";

export const Blog: VFC = () => {
  const blogData = useRecoilValue(blogDataState);

  const blogBox = useRef(null);

  const setAnimation = useCallback(() => {
    gsap.fromTo(
      blogBox.current,
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.5,
        scrollTrigger: { trigger: blogBox.current, start: "top center", end: "bottom center" },
      }
    );
  }, []);

  useEffect(() => {
    setAnimation();
  }, [setAnimation]);

  return (
    <div ref={blogBox} className="py-8 bg-gray-100 rounded">
      <h2 className="px-2 text-3xl italic font-bold text-gray-700 border-b-4 border-green-500 md:text-5xl md:border-b-8">
        Blog
      </h2>
      <h3 className="px-2 text-lg font-bold text-gray-700 md:text-xl">最新のブログ記事</h3>

      <ul className="grid gap-y-8 px-10 mt-8 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
        {blogData.map((blog: any) => (
          <li key={blog.title} className="group bg-gray-100 hover:bg-gray-50 rounded-xl border shadow duration-150">
            <Link href={`/blog/${blog.id}`}>
              <a>
                {blog.thumbnail ? (
                  <Image
                    src={blog.thumbnail.url}
                    alt="サムネイル画像"
                    width={400}
                    height={240}
                    objectFit="cover"
                    className="rounded-t-xl opacity-90 group-hover:opacity-100 duration-150 group-hover:scale-110"
                  />
                ) : null}

                <div className="flex flex-col justify-between p-4">
                  <h2 className="font-bold md:text-lg">{blog.title}</h2>

                  <div className="flex justify-between items-center mt-4">
                    <div className="py-1 px-2 text-gray-50 bg-green-600 rounded">{blog.category.name}</div>
                    <div>{format(new Date(blog.createdAt), "yyyy-MM-dd")}</div>
                  </div>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12 text-center">
        <LinkButton href="/blog" className="primary-button">
          ブログ記事一覧はこちら
        </LinkButton>
      </div>
    </div>
  );
};
