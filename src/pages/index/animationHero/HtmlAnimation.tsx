import gsap from "gsap/dist/gsap";
import type { VFC } from "react";
import { useEffect, useRef } from "react";
import { SiHtml5 } from "react-icons/si";

export const HtmlAnimation: VFC = () => {
  const htmlBox: any = useRef(null);
  const htmlIcon: any = useRef(null);

  useEffect(() => {
    const htmlTl = gsap.timeline({
      scrollTrigger: {
        trigger: htmlBox.current,
        start: "top top",
        end: "+=700",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    htmlTl.fromTo(
      htmlIcon.current,
      {
        opacity: 0,
        scale: 0.2,
        x: -150,
      },
      { opacity: 1, scale: 4, x: 0, color: "#e34f26", ease: "Power4.out" }
    );

    htmlTl.to(htmlBox.current, { backgroundColor: "#26bae3" }, "<");

    htmlTl.to(htmlIcon.current, { scale: 8, autoAlpha: 0 });

    return () => {
      htmlTl.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div ref={htmlBox} className="flex relative flex-col justify-center items-center w-full h-screen">
      <div ref={htmlIcon}>
        <div>
          <SiHtml5 className="text-4xl md:text-6xl lg:text-8xl" />
        </div>
      </div>
    </div>
  );
};
