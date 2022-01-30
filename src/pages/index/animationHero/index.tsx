// import gsap from "gsap";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { LegacyRef, VFC } from "react";
import { useEffect, useRef, useState } from "react";
import { SiCss3, SiHtml5, SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";
import { FirstView } from "src/pages/index/animationHero/FirstView";
import { TypewriterAnimation } from "src/pages/index/animationHero/TypewriterAnimation";

export const AnimationHero: VFC = () => {
  const listContainer: LegacyRef<HTMLDivElement> | undefined = useRef(null);

  const listWrapper: LegacyRef<HTMLDivElement> | undefined = useRef(null);

  const list: LegacyRef<HTMLUListElement> | undefined = useRef(null);
  const [listWidth, setListWidth] = useState(0);
  useEffect(() => {
    if (list.current) {
      const clientWidth = list?.current.clientWidth;
      setListWidth(clientWidth);
    }
  }, []);

  useEffect(() => {
    const listTl = gsap.timeline({
      scrollTrigger: {
        trigger: listContainer.current,
        start: "top top",
        pin: true,
        end: `+=${innerHeight}`,
        scrub: 0.5,
        pinSpacing: false,
        // anticipatePin: 1,
        // invalidateOnRefresh: true,
      },
    });

    listTl.to(list.current, {
      delay: 0.1,
      x: -listWidth + innerWidth - 120,
      ease: "none",
    });

    ScrollTrigger.refresh();
    // listTl.scrollTrigger.kill();
  }, [listWidth]);

  return (
    <div className="pb-48 -mx-2 bg-white border border-white lg:mt-[86px] xl:mx-0">
      <FirstView />

      <div ref={listContainer} className="flex items-center min-h-[100vh]">
        <div ref={listWrapper} className="overflow-hidden px-12 max-w-full">
          <ul ref={list} className="inline-flex">
            <li>
              <SiHtml5 className="w-screen text-[160px] text-[#e34f26] md:text-[200px] lg:text-[240px]" />
            </li>
            <li>
              <SiCss3 className="w-screen text-[160px] text-[#2965f1] md:text-[200px] lg:text-[240px]" />
            </li>
            <li>
              <SiTypescript className="w-screen text-[160px] text-[#3178c6] md:text-[200px] lg:text-[240px]" />
            </li>
            <li>
              <SiReact className="w-screen text-[160px] text-[#00d8ff] md:text-[200px] lg:text-[240px]" />
            </li>
            <li>
              <SiNextdotjs className="w-screen text-[160px] md:text-[200px] lg:text-[240px]" />
            </li>
          </ul>
        </div>
      </div>

      <TypewriterAnimation />
    </div>
  );
};
