// import gsap from "gsap";
import gsap from "gsap/dist/gsap";
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
    gsap.to(list.current, {
      x: () => -(listWidth - listWrapperWidth),
      ease: "none",
      scrollTrigger: {
        trigger: listContainer.current,
        start: "top top",
        end: () => `+=${listWidth - listWrapperWidth}`,
        scrub: 0.5,
        pin: true,
        pinSpacing: false,
      },
    });
  }, [listWidth, listWrapperWidth]);

  return (
    <div className="pb-48 -mx-2 bg-white border border-white lg:mt-[86px] xl:mx-0">
      <FirstView />

      <div ref={listContainer} className="flex justify-center items-center">
        <div ref={listWrapper} className="flex overflow-hidden relative w-full h-[400vw]">
          <ul ref={list} className="flex absolute top-0 left-0">
            <li className="flex justify-center items-center w-[90vw] h-[100vh] text-[300px] text-[#e34f26]">
              <SiHtml5 />
            </li>
            <li className="flex justify-center items-center w-[90vw] h-[100vh] text-[300px] text-[#2965f1]">
              <SiCss3 />
            </li>
            <li className="flex justify-center items-center w-[90vw] h-[100vh] text-[300px] text-[#3178c6]">
              <SiTypescript />
            </li>
            <li className="flex justify-center items-center w-[90vw] h-[100vh] text-[300px] text-[#00d8ff]">
              <SiReact />
            </li>
            <li className="flex justify-center items-center w-[90vw] h-[100vh] text-[300px]">
              <SiNextdotjs />
            </li>
          </ul>
        </div>
      </div>

      <TypewriterAnimation />
    </div>
  );
};
