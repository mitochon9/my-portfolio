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
        scrollTrigger: { trigger: aboutBox.current, start: "top center" },
      }
    );
  }, []);

  return (
    <div ref={aboutBox} className="py-8 bg-gray-100 rounded md:mx-0">
      <h2 className="px-2 text-3xl italic font-bold text-gray-700 border-b-4 border-green-500 md:text-5xl md:border-b-8">
        About
      </h2>
      <h3 className="px-2 text-lg font-bold text-gray-700 md:text-xl">私について</h3>

      <div className="flex flex-col gap-x-8 mx-2 mt-4 md:flex-row md:mx-8 md:mt-8">
        <div className="flex flex-col justify-between">
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet delectus ullam dignissimos dicta. Consequatur
            nostrum magni numquam corrupti tempora dolores deserunt, aspernatur culpa sint non quod temporibus esse
            distinctio at.
          </p>

          <div className="flex flex-col justify-between items-end mt-4 md:flex-row md:mt-0">
            <ul className="flex gap-x-4 justify-end text-2xl md:text-4xl">
              {icons.map((icon) => (
                <li key={icon.label}>{icon.icon}</li>
              ))}
              <li></li>
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

        <div className="mt-4 md:mt-0">
          <Image src="/profile.jpeg" alt="profile" width={600} height={600} objectFit="cover" />
        </div>
      </div>
    </div>
  );
};
