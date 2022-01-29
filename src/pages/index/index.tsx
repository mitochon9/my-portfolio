import type { VFC } from "react";
import { About } from "src/pages/index/About";
import { AnimationHero } from "src/pages/index/animationHero";
import { Blog } from "src/pages/index/Blog";
import { Production } from "src/pages/index/Production";

export const Index: VFC = () => (
  <div className="space-y-32">
    <AnimationHero />
    <section id="about">
      <About />
    </section>
    <section id="production">
      <Production />
    </section>
    <section id="blog">
      <Blog />
    </section>
  </div>
);
