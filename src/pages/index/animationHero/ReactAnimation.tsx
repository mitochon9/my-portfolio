import gsap from "gsap/dist/gsap";
import type { VFC } from "react";
import { useEffect, useRef } from "react";
import { SiReact } from "react-icons/si";

export const ReactAnimation: VFC = () => {
  const reactBox: any = useRef(null);
  const reactIcon: any = useRef(null);

  useEffect(() => {
    const reactTl = gsap.timeline({
      scrollTrigger: {
        trigger: reactBox.current,
        start: "top top",
        end: "+=700",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
    reactTl.fromTo(
      reactIcon.current,
      {
        opacity: 0,
        scale: 0.2,
        x: 150,
      },
      { opacity: 1, scale: 4, x: 0, color: "#00d8ff", ease: "Power4.out" }
    );

    reactTl.to(reactBox.current, { backgroundColor: "#ff2700" }, "<");

    reactTl.to(reactIcon.current, { scale: 8, autoAlpha: 0 });

    return () => {
      reactTl.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div ref={reactBox} className="flex relative flex-col justify-center items-center w-full h-screen">
      <div ref={reactIcon}>
        <SiReact className="text-4xl md:text-6xl lg:text-8xl" />
      </div>
    </div>
  );
};
