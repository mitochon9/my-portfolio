import gsap from "gsap/dist/gsap";
import type { VFC } from "react";
import { useEffect, useRef } from "react";
import { SiTypescript } from "react-icons/si";

export const TypeScriptAnimation: VFC = () => {
  const typeScriptBox: any = useRef(null);
  const typeScriptIcon: any = useRef(null);

  useEffect(() => {
    const typeScriptTl = gsap.timeline({
      scrollTrigger: {
        trigger: typeScriptBox.current,
        start: "top top",
        end: "+=700",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
    typeScriptTl.fromTo(
      typeScriptIcon.current,
      {
        opacity: 0,
        scale: 0.2,
        x: -150,
      },
      { opacity: 1, scale: 4, x: 0, color: "#3178c6", ease: "Power4.out" }
    );

    typeScriptTl.to(typeScriptBox.current, { backgroundColor: "#c67f31" }, "<");

    typeScriptTl.to(typeScriptIcon.current, { scale: 8, autoAlpha: 0 });

    return () => {
      typeScriptTl.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div ref={typeScriptBox} className="flex relative flex-col justify-center items-center w-full h-screen">
      <div ref={typeScriptIcon}>
        <div>
          <SiTypescript className="text-4xl md:text-6xl lg:text-8xl" />
        </div>
      </div>
    </div>
  );
};
