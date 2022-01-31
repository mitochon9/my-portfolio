import { differenceInCalendarDays } from "date-fns";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import type { VFC } from "react";
import { useEffect, useRef } from "react";
import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const icons = [
  { label: "HTML", icon: <SiHtml5 className="text-[#e34f26]" /> },
  { label: "CSS", icon: <SiCss3 className="text-[#2965f1]" /> },
  { label: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" /> },
  { label: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" /> },
  { label: "React", icon: <SiReact className="text-[#00d8ff]" /> },
  { label: "Next.js", icon: <SiNextdotjs className="text-[#000]" /> },
  { label: "TailwindCSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
];

export const About: VFC = () => {
  const learningStartDate = new Date("2021-02-14");
  const elapsedDaysOfLearning = differenceInCalendarDays(new Date(), learningStartDate);

  const aboutBox = useRef(null);

  useEffect(() => {
    gsap.set(aboutBox.current, { autoAlpha: 0 });
    gsap.fromTo(
      aboutBox.current,
      {
        y: 50,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.5,
        scrollTrigger: { trigger: aboutBox.current, start: "top 90%" },
      }
    );
  }, []);

  return (
    <div ref={aboutBox} className="py-8 bg-gray-100 rounded md:mx-0">
      <h2 className="px-2 text-3xl italic font-bold text-gray-700 border-b-4 border-green-500 md:text-5xl md:border-b-8">
        About
      </h2>
      <h3 className="px-2 text-lg font-bold text-gray-700 md:text-xl">私について</h3>

      <div className="flex flex-col-reverse gap-x-8 md:flex-row md:justify-between md:mt-8">
        <div className="flex flex-col flex-1 justify-between px-4 mt-4 w-full md:mt-0">
          <p className="text-lg prose">
            大阪の鍼灸整骨院で柔道整復師として働いています。職場のHP作成をきっかけにWeb制作、プログラミングの学習をスタートしました。
            <br />
            次々と学習を進めていくごとに制作することの楽しさ、喜びを知り、誰かの課題を解決できるようなものを作りたいという気持ちが大きくなり、プログラミングを本業とするべく学習しています。
            <br />
            約一年間、一日も欠かさず学習を続けており、ひとつひとつできることが増えていく喜びを感じています。
            <br />
            プログラミング技術向上への貪欲さ、常に情報をキャッチしようとする姿勢は誰にも負けません！
            よろしくお願いします！
          </p>

          <div className="flex flex-col justify-between items-end mt-8 md:flex-row md:flex-1">
            <ul className="flex gap-x-4 justify-end text-2xl md:text-4xl">
              {icons.map((icon) => (
                <li key={icon.label}>{icon.icon}</li>
              ))}
            </ul>

            <div className="mt-4 text-right">
              学習開始から
              <span className="px-2 mx-1 text-2xl font-bold text-gray-50 bg-green-500 rounded shadow md:text-4xl">
                {elapsedDaysOfLearning}
              </span>
              日
            </div>
          </div>
        </div>

        <div className="mt-4 w-auto md:mt-0">
          <Image src="/profile.jpeg" alt="profile" width={400} height={400} objectFit="cover" />
        </div>
      </div>
    </div>
  );
};
