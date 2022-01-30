// import gsap from "gsap";
import type { VFC } from "react";
import { CssAnimation } from "src/pages/index/animationHero/CssAnimation";
import { FirstView } from "src/pages/index/animationHero/FirstView";
import { HtmlAnimation } from "src/pages/index/animationHero/HtmlAnimation";
import { NextJsAnimation } from "src/pages/index/animationHero/NextJsAnimation";
import { ReactAnimation } from "src/pages/index/animationHero/ReactAnimation";
import { TypeScriptAnimation } from "src/pages/index/animationHero/TypeScriptAnimation";
import { TypewriterAnimation } from "src/pages/index/animationHero/TypewriterAnimation";

export const AnimationHero: VFC = () => (
  <div className="pb-48 -mx-2 bg-white border border-white lg:mt-[86px] xl:mx-0">
    <FirstView />

    <HtmlAnimation />

    <CssAnimation />

    <TypeScriptAnimation />

    <ReactAnimation />

    <NextJsAnimation />

    <TypewriterAnimation />
  </div>
);
