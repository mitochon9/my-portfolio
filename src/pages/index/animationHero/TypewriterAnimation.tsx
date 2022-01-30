import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { VFC } from "react";
import { useRef } from "react";
import Typewriter from "typewriter-effect";

export const TypewriterAnimation: VFC = () => {
  const typewriterBox: any = useRef(null);

  return (
    <div className="flex relative flex-col justify-center items-center mt-48 w-full min-h-screen text-5xl">
      <div ref={typewriterBox} className="mt-96">
        <Typewriter
          onInit={(typewriter) => {
            ScrollTrigger.create({
              trigger: typewriterBox.current,
              start: "bottom bottom",
              once: true,
              onEnter: () => typewriter.typeString("Cherish day by day!!").start(),
            });
          }}
          options={{ wrapperClassName: "font-bold text-gray-700 text-3xl md:text-6xl" }}
        />
      </div>
    </div>
  );
};
