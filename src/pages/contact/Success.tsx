import type { VFC } from "react";
import { LinkButton } from "src/component/Button";

export const Success: VFC = () => (
  <div className="py-20 text-center bg-gray-100 rounded">
    <p className="leading-loose">
      お問い合わせありがとうございます。
      <br />
      確認のため、自動返信メールをお送り致します。
    </p>

    <div className="mt-4">
      <LinkButton href="/">Home</LinkButton>
    </div>
  </div>
);
