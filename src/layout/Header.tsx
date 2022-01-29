import Link from "next/link";
import { useRouter } from "next/router";
import type { LegacyRef, VFC } from "react";
import { useEffect, useRef } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillTwitterSquare,
  AiOutlineEdit,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineLaptop,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";
import { useRecoilState } from "recoil";
import { headerHeightState } from "src/component/state/headerHeightAtom";

export const firstLinks = [
  {
    href: "https://www.facebook.com/shinji.takahashiii",
    label: "Facebook",
    icon: (
      <AiFillFacebook className="text-3xl group-hover:text-gray-100 group-hover:bg-[#1877f2] hover:bg-[#1877f2] rounded" />
    ),
  },
  {
    href: "https://www.instagram.com/ikiiki.shinji",
    label: "Instagram",
    icon: (
      <AiFillInstagram className="text-3xl group-hover:text-gray-100 group-hover:bg-[#e1306c] hover:bg-[#e1306c] rounded" />
    ),
  },
  {
    href: "https://twitter.com/mitochon_9",
    label: "Twitter",
    icon: (
      <AiFillTwitterSquare className="text-3xl group-hover:text-gray-100 group-hover:bg-[#1da1f2] hover:bg-[#1da1f2] rounded" />
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: <AiFillMail className="text-3xl group-hover:text-gray-100 group-hover:bg-rose-400" />,
  },
];

export const secondLinks = [
  {
    href: "about",
    label: "About",
    icon: <AiOutlineInfoCircle className="text-3xl" />,
  },
  {
    href: "production",
    label: "Production",
    icon: <FaLaptopCode className="text-3xl" />,
  },
  {
    href: "blog",
    label: "Blog",
    icon: <AiOutlineEdit className="text-3xl" />,
  },
];

/**
 * @package
 */
export const Header: VFC = () => {
  const router = useRouter();

  const ref: LegacyRef<HTMLDivElement> | undefined = useRef(null);

  const [headerHeight, setHeaderHeight] = useRecoilState(headerHeightState);

  useEffect(() => {
    if (ref.current) {
      const clientHeight = ref?.current.clientHeight;
      setHeaderHeight(clientHeight);
    }
  }, [ref, setHeaderHeight]);

  return (
    <div ref={ref} className="fixed top-0 z-10 w-full">
      <div className="hidden justify-between items-center text-gray-100 bg-gray-600 lg:flex">
        <h2>Shinji Takahashi&apos;s portfolio</h2>
        <nav className="flex gap-x-4 justify-center items-center">
          {firstLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`flex font-bold items-end ${
                  link.label === "Contact" ? "bg-rose-400 hover:bg-rose-500 px-8 py-1 space-x-1" : ""
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.label === "Contact" ? link.label : null}</span>
              </a>
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex justify-between items-center px-2 h-[86px] bg-gray-50 shadow lg:h-auto">
        <h1 className="space-x-1 text-gray-600">
          {router.pathname === "/" ? (
            <Scroll
              to="home"
              smooth
              duration={600}
              className="flex gap-x-1 justify-center items-center italic cursor-pointer md:items-end"
            >
              <AiOutlineLaptop className="text-4xl md:text-3xl" />
              <div className="flex flex-col font-bold text-right scale-y-110 md:flex-row md:gap-x-1 md:text-2xl lg:text-3xl">
                <span>Shinji Takahashi&apos;s</span>
                <span className="text-green-500"> PORTFOLIO</span>
              </div>
            </Scroll>
          ) : (
            <Link href="/">
              <a className="flex gap-x-1 justify-center items-center italic md:items-end">
                <AiOutlineLaptop className="text-4xl md:text-3xl" />
                <div className="flex flex-col font-bold text-right scale-y-110 md:flex-row md:gap-x-1 md:text-2xl lg:text-3xl">
                  <span>Shinji Takahashi&apos;s</span>
                  <span className="text-green-500"> PORTFOLIO</span>
                </div>
              </a>
            </Link>
          )}
        </h1>

        <nav className="hidden justify-center items-center text-gray-700 lg:flex">
          {router.pathname === "/" ? (
            <Scroll
              to="home"
              smooth
              duration={600}
              className="flex items-end py-2 px-4 text-2xl hover:bg-gray-200 cursor-pointer"
            >
              <AiOutlineHome className="text-3xl" />
              <span>Home</span>
            </Scroll>
          ) : (
            <Link href="/">
              <a className="flex items-end py-2 px-4 text-2xl hover:bg-gray-200">
                <AiOutlineHome className="text-3xl" />
                <span>Home</span>
              </a>
            </Link>
          )}

          {secondLinks.map((link) =>
            router.pathname === "/" ? (
              <Scroll
                to={link.href}
                smooth
                duration={600}
                offset={-headerHeight - 20}
                className="flex items-end py-2 px-4 text-2xl hover:bg-gray-200 cursor-pointer"
              >
                <AiOutlineHome className="text-3xl" />
                <span>{link.label}</span>
              </Scroll>
            ) : (
              <Link key={link.href} href={`/#${link.href}`}>
                <a className="flex items-end py-2 px-4 text-2xl hover:bg-gray-200 hover:cursor-pointer">
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              </Link>
            )
          )}
        </nav>

        <nav className="md:hidden">
          <AiOutlineMenu />
        </nav>
      </div>
    </div>
  );
};
