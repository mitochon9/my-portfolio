import gsap from "gsap/dist/gsap";
import type { VFC } from "react";
import { useEffect, useRef } from "react";
import { SiNextdotjs } from "react-icons/si";

export const NextJsAnimation: VFC = () => {
  const nextJsBox: any = useRef(null);
  const nextJsIcon: any = useRef(null);

  useEffect(() => {
    const nextJsTl = gsap.timeline({
      scrollTrigger: {
        trigger: nextJsBox.current,
        start: "top top",
        end: "+=700",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
    nextJsTl.fromTo(
      nextJsIcon.current,
      {
        opacity: 0,
        scale: 0.2,
        x: -150,
      },
      { opacity: 1, scale: 4, x: 0, color: "#000", ease: "Power4.out" }
    );

    nextJsTl.to(nextJsBox.current, { backgroundColor: "#fff" }, "<");

    nextJsTl.to(nextJsIcon.current, { scale: 8, autoAlpha: 0 });

    return () => {
      nextJsTl.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div ref={nextJsBox} className="flex relative flex-col justify-center items-center w-full h-screen">
      <div ref={nextJsIcon}>
        <SiNextdotjs className="text-4xl md:text-6xl lg:text-8xl" />
      </div>
    </div>
  );
};
