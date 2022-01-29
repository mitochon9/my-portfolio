import gsap from "gsap/dist/gsap";
import type { VFC } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

export const FirstView: VFC = () => {
  const topBox: any = useRef(null);
  const welcomeBox: any = useRef(null);
  const portfolioBox: any = useRef(null);
  const scrollBox: any = useRef(null);

  useEffect(() => {
    const topBoxTl = gsap.timeline({
      defaults: { duration: 1, ease: "power4.out" },
    });

    topBoxTl
      .from(topBox.current, {
        scale: 0,
      })

      .to(welcomeBox.current, {
        right: 20,
      })
      .to(
        portfolioBox.current,
        {
          left: 30,
          color: "#22c55e",
        },
        "<"
      )
      .to(
        topBox.current,
        {
          scale: 1.5,
        },
        "<"
      )
      .fromTo(
        scrollBox.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "<"
      );
  }, []);

  return (
    <div className="flex relative justify-center items-center h-[calc(100vh-86px)]">
      <div ref={topBox} className="relative">
        <div ref={welcomeBox} className="absolute -right-10 bottom-14 w-full text-2xl font-bold md:text-4xl">
          Welcome to
        </div>
        <div className="text-xl md:text-3xl">Shinji Takahashi&apos;s</div>
        <div ref={portfolioBox} className="absolute top-14 left-0 w-full text-2xl font-bold md:text-4xl">
          PORTFOLIO
        </div>
      </div>

      <div ref={scrollBox} className="absolute bottom-8 left-1/2 -translate-x-1/2 md:text-4xl">
        <div>scroll</div>

        <AiOutlineArrowDown className="mx-auto mt-2 text-4xl animate-bounce" />
      </div>
    </div>
  );
};
