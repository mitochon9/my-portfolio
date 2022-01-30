import { gsap } from "gsap/dist/gsap";
import Image from "next/image";
import type { VFC } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { LinkButton } from "src/component/Button";

const productions = [
  {
    href: "https://ikiiki-ss-ibaraki-ver-6.vercel.app/",
    label: "いきいき鍼灸整骨院HP（SEO設定調整中）",
    buttonLabel: "いきいき鍼灸整骨院HP",
    img: "/ikiikiHp.png",
    comment: `職場のホームページをReact(Next.js), TypeScript, TailwindCSS などを使用して作成しました。
InstagramのAPIで投稿を埋め込むことや、ヘッドレスCRM(microCMS)でのブログ作成にもチャレンジしてみました！

最初は素のHTML, CSS で作成し、使用技術を変えながら作るごとにメンテナンスのしやすさなどを意識して作成しています。
GoogleのPageSpeed Insights で高パフォーマンスを出すことにも成功しました！
（製作期間：1週間（既存のコンポーネント使用））`,
  },
  {
    href: "https://poke-gacha-ver-2-0.vercel.app/",
    label: "ポケガチャ",
    buttonLabel: "ポケガチャ",
    img: "/pokeGacha.png",
    comment: `ポケモンのAPI（PokeAPI）からデータを取得して初期のポケモン（151匹）をランダムに表示するアプリを作成しました。
React のuseState を使用したboolean での画面の切り替え、制御をする部分や、ゲームボーイの見た目を表現するためのCSSに力を入れました！

また、ガチャで当たったポケモンのデータをlocalStorage に保存、削除する機能も実装し、ポケモン図鑑として見られるようにしました。
React ではDOM の操作はNG ということでそのあたりの制御も意識しながら作成しました。
（製作期間：4日）`,
  },
  {
    href: "https://mitochon9-crm-ver-2-0.vercel.app/",
    label: "顧客管理システム（作成中）",
    buttonLabel: "顧客管理システム",
    img: "/mitochonCrm.png",
    comment: `整骨院向けの顧客管理システム、電子カルテ化をすすめるためのアプリケーションを作成しています。
認証機能やデータベースのCRUD操作、テーブルの結合やデータのフィルター、統計機能の作り方を学習しながら実装しています！

認証機能、データベースは比較的簡単に利用できるであろうSupabase を使用していますが、初めての実装で躓くことも多かったです。
今後認証機能、データベースに関して別の実装方法も学習していきたいと考えています。
（製作期間：2ヶ月〜）`,
  },
  {
    href: "https://ik-fitness-labo.com/",
    label: "IK-Fitness",
    buttonLabel: "IK-Fitness",
    img: "/ikFitness.png",
    comment: `Web制作、開発の学習を初めて最初に作ったサイトです！
最初はHTML, CSS のみで作り、2度目はgulp で環境構築し、Sass を使って実装しました。
3度目の制作はReact（Next.js） での制作です。
React を学習し始めて最初に作ったのもこのWebサイトです。
何もかも初めてでうまく作れないところから一つ一つ学んでいくきっかけになった想い出の多いサイトです。
（製作期間：1ヶ月）`,
  },
  {
    href: "https://my-portfolio-dun-six.vercel.app/",
    label: "ポートフォリオサイト",
    buttonLabel: "ポートフォリオサイト",
    img: "/myPortfolio.png",
    comment: `一通り制作物が溜まってきたのでポートフォリオサイトを作成しました！
今までアニメーションはあまり実装してこなかったので、これを機に簡単ではありますが実装してみました。
アニメーションのライブラリはGSAP を使用しています。React でのGSAP を使用したアニメーションの実装はあまり情報量が多くなく少し手間取りましたが、様々な情報をつなぎ合わせて実装するための練習になったと思います。

またお問合せフォームはSendGrid を使用して実装しました。そのあたりのバックエンドの処理も深く学習していきたいと考えています。
このポートフォリオサイトもGoogleのPageSpeed Insights で高パフォーマンスを出すことに成功しました！
（製作期間：10日）`,
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
        scrollTrigger: { trigger: productionBox.current, start: "top 90%" },
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

      <div className="px-2 mt-8 space-y-16 lg:px-8">
        <p className="mx-auto prose">
          基本的にReact(Next.js), TypeScript, TailwindCSS を使用して作成しています。今後必要に応じてPHP
          などのバックエンド言語や、日本で人気といわれているVue を習得していきたいと考えています。
        </p>
        {productions.map((production, index) => (
          <div key={production.label} className="p-4 bg-gray-50 border shadow lg:p-8">
            <h2 className="text-xl font-bold md:text-3xl">{production.label}</h2>

            <div
              className={`flex md:flex-row flex-col-reverse lg:mt-8 mt-4 gap-x-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex flex-col flex-1 justify-between">
                <p className="mt-4 w-full whitespace-pre-wrap prose lg:mt-0">{production.comment}</p>
                <div className="mt-4 ml-auto max-w-xs md:mt-0">
                  <LinkButton href={production.href} className="primary-button">
                    {production.buttonLabel}
                  </LinkButton>
                </div>
              </div>

              <div className="lg:w-auto">
                <Image src={production.img} alt={production.label} width={360} height={240} objectFit="contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
