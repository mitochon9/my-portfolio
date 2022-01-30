import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import type { VFC } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { LinkButton } from "src/component/Button";

const productions = [
  {
    href: "/",
    label: "顧客管理システム",
    img: "/hero.png",
    comment: `comment`,
  },
  {
    href: "/",
    label: "ポケガチャ",
    img: "/hero.png",
    comment: `comment`,
  },
  {
    href: "/",
    label: "いきいき鍼灸整骨院HP",
    img: "/hero.png",
    comment: `comment`,
  },
  {
    href: "/",
    label: "IK-Fitness",
    img: "/hero.png",
    comment: `comment`,
  },
];

export const Production: VFC = () => {
  const productionBox = useRef(null);

  const setAnimation = useCallback(() => {
    gsap.fromTo(
      productionBox.current,
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.5,
        scrollTrigger: { trigger: productionBox.current, start: "top center", end: "bottom center" },
      }
    );
  }, []);

  useEffect(() => {
    setAnimation();
  }, [setAnimation]);

  return (
    <div ref={productionBox} className="py-8 bg-gray-100 rounded">
      <h2 className="px-2 text-3xl italic font-bold text-right text-gray-700 border-b-4 border-green-500 md:text-5xl md:border-b-8">
        Production
      </h2>
      <h3 className="px-2 text-lg font-bold text-right text-gray-700 md:text-xl">制作物</h3>

      <div className="px-8 mt-8 space-y-16">
        {productions.map((production, index) => (
          <div key={production.label} className="p-4 bg-gray-50 border shadow lg:p-8">
            <h2 className="text-xl font-bold md:text-3xl">{production.label}</h2>

            <div
              className={`flex md:flex-row flex-col-reverse mt-4 gap-x-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex flex-col flex-1 justify-between">
                <p className="mt-4">{production.comment}</p>
                <div className="flex justify-end mt-4 md:mt-0">
                  <LinkButton href={production.href} className="primary-button">
                    {production.label}
                  </LinkButton>
                </div>
              </div>

              <div className="w-60 lg:w-auto">
                <Image src={production.img} alt={production.label} width={360} height={240} objectFit="cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
