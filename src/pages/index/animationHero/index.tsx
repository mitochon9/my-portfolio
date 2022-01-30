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
  const [listWrapperWidth, setListWrapperWidth] = useState(0);
  useEffect(() => {
    if (listWrapper.current) {
      const clientWidth = listWrapper?.current.clientWidth;
      setListWrapperWidth(clientWidth);
    }
  }, []);

  const list: LegacyRef<HTMLUListElement> | undefined = useRef(null);
  const [listWidth, setListWidth] = useState(0);
  useEffect(() => {
    if (list.current) {
      const clientWidth = list?.current.clientWidth;
      setListWidth(clientWidth);
    }
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
    gsap.to(list.current, {
      x: () => -(listWidth - listWrapperWidth),
      ease: "none",
      scrollTrigger: {
        trigger: listContainer.current,
        start: "top top",
        end: () => `+=${listWidth - listWrapperWidth}`,
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
  }, [listWidth, listWrapperWidth]);

  return (
    <div className="pb-48 -mx-2 bg-white border border-white lg:mt-[86px] xl:mx-0">
      <FirstView />

      <div ref={listContainer} className="flex justify-center items-center">
        <div ref={listWrapper} className="relative w-full h-[420vw]">
          <ul ref={list} className="flex absolute top-[60px] left-0">
            <li className="flex justify-center items-center w-[90vw] h-[100vh] text-[32px] font-bold">
              <SiHtml5 className="text-[160px] text-[#e34f26] md:text-[200px] lg:text-[240px]" />
            </li>
            <li className="flex justify-center items-center w-[90vw] h-[100vh] text-[32px] font-bold">
              <SiCss3 className="text-[160px] text-[#2965f1] md:text-[200px] lg:text-[240px]" />
            </li>
            <li className="flex justify-center items-center w-[90vw] h-[100vh] text-[32px] font-bold">
              <SiTypescript className="text-[160px] text-[#3178c6] md:text-[200px] lg:text-[240px]" />
            </li>
            <li className="flex justify-center items-center w-[90vw] h-[100vh] text-[32px] font-bold">
              <SiReact className="text-[160px] text-[#00d8ff] md:text-[200px] lg:text-[240px]" />
            </li>
            <li className="flex justify-center items-center w-[90vw] h-[100vh] text-[32px] font-bold">
              <SiNextdotjs className="text-[160px] md:text-[200px] lg:text-[240px]" />
            </li>
          </ul>
        </div>
      </div>

      {/* <HtmlAnimation />

<CssAnimation />

<TypeScriptAnimation />

<ReactAnimation />

<NextJsAnimation /> */}

      <TypewriterAnimation />
    </div>
  );
};
