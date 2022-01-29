import gsap from "gsap/dist/gsap";
import type { VFC } from "react";
import { useEffect, useRef } from "react";
import { SiCss3 } from "react-icons/si";

export const CssAnimation: VFC = () => {
  const cssBox: any = useRef(null);
  const cssIcon: any = useRef(null);

  useEffect(() => {
    const cssTl = gsap.timeline({
      scrollTrigger: {
        trigger: cssBox.current,
        start: "top top",
        end: "+=700",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
    cssTl.fromTo(
      cssIcon.current,
      {
        opacity: 0,
        scale: 0.2,
        x: 150,
      },
      { opacity: 1, scale: 4, x: 0, color: "#2965f1", ease: "Power4.out" }
    );

    cssTl.to(cssBox.current, { backgroundColor: "#e34f26" }, "<");

    cssTl.to(cssIcon.current, { scale: 8, autoAlpha: 0 });

    return () => {
      cssTl.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div ref={cssBox} className="flex relative flex-col justify-center items-center w-full h-screen">
      <div ref={cssIcon}>
        <div>
          <SiCss3 className="text-4xl md:text-6xl lg:text-8xl" />
        </div>
      </div>
    </div>
  );
};
