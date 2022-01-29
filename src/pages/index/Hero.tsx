import { differenceInCalendarDays } from "date-fns";
import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import type { VFC } from "react";
import { useEffect, useRef } from "react";

export const Hero: VFC = () => {
  const learningStartDate = new Date("2021-02-14");
  const elapsedDaysOfLearning = differenceInCalendarDays(new Date(), learningStartDate);

  const boxRef: any | undefined = useRef();
  useEffect(() => {
    gsap.to(boxRef.current, {
      delay: 1,
      duration: 1.5,
      opacity: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className={`container relative mx-auto text-center mt-[86px]`}>
      <Image src="/hero.png" alt="hero" width={1440} height={600} objectFit="cover" />
      <div
        ref={boxRef}
        className="absolute top-1/2 left-4 p-8 text-gray-100 bg-black rounded opacity-50 -translate-y-1/2 2xl:left-0"
      >
        <div className="grid grid-cols-5">
          <div className="col-span-2">
            <div>
              <Image
                src="/profile.jpeg"
                alt="profile"
                width={160}
                height={200}
                objectFit="cover"
                objectPosition="30%"
              />
            </div>
            <div className="text-left">
              <span className="text-xs">フロントエンドエンジニア</span>
              <h2 className="text-xl font-bold">高橋 信次</h2>
              <span className="text-xs">https://takahashishinji.net/</span>
            </div>
          </div>

          <div className="flex flex-col col-span-3 justify-between">
            <div>
              <h2 className="">キャッチコピー</h2>
            </div>

            <div className="mt-4 text-right">
              学習開始から
              <span className="px-2 mx-1 text-4xl font-bold text-gray-50 bg-green-500 rounded shadow">
                {elapsedDaysOfLearning}
              </span>
              日
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
