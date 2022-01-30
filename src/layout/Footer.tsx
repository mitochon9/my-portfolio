import Link from "next/link";
import { useRouter } from "next/router";
import type { VFC } from "react";
import { AiOutlineArrowUp, AiOutlineLaptop, AiOutlineMail } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";
import { useRecoilValue } from "recoil";
import { headerHeightState } from "src/component/state/headerHeightAtom";
import { firstLinks, secondLinks } from "src/layout/Header";

/**
 * @package
 */
export const Footer: VFC = () => {
  const router = useRouter();

  const headerHeight = useRecoilValue(headerHeightState);

  return (
    <div className="pt-8 bg-gray-50">
      <div className="text-center">
        <Scroll
          to="home"
          smooth
          duration={600}
          className="inline-block text-gray-600 duration-100 hover:-translate-y-1 cursor-pointer"
        >
          <AiOutlineArrowUp className="mx-auto text-3xl" />
          <span className="block">PAGE TOP</span>
        </Scroll>
      </div>

      <div className="container py-12 px-4 mx-auto mt-8 text-gray-800 bg-gray-200 md:px-8 md:my-8 md:rounded-lg lg:py-24">
        <div className="grid gap-y-8 md:grid-cols-3 md:gap-0">
          <div>
            {router.pathname === "/" ? (
              <Scroll
                to="home"
                smooth
                duration={600}
                className="flex gap-x-2 items-end text-2xl cursor-pointer lg:text-4xl"
              >
                <AiOutlineLaptop className="text-2xl lg:text-4xl" />
                Shinji Takahashi
              </Scroll>
            ) : (
              <Link href="/">
                <a className="flex gap-x-2 items-end text-2xl cursor-pointer lg:text-4xl">
                  <AiOutlineLaptop className="text-2xl lg:text-4xl" />
                  Shinji Takahashi
                </a>
              </Link>
            )}
            <div className="flex gap-x-2 items-end mt-4">
              <AiOutlineMail />
              mitochon9@gmail.com
            </div>
          </div>

          {router.pathname === "/" ? (
            <nav className="flex flex-col">
              <ul>
                {secondLinks.map((link) => (
                  <li key={link.href}>
                    <Scroll
                      to={link.href}
                      smooth
                      duration={600}
                      offset={-headerHeight - 20}
                      className="group flex gap-x-2 items-center py-2 pr-6 text-2xl hover:bg-gray-300 rounded hover:cursor-pointer"
                    >
                      <FaChevronRight className="text-xl group-hover:translate-x-1" />
                      <span>{link.label}</span>
                    </Scroll>
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            <nav>
              <ul className="space-y-2">
                {secondLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={`/#${link.href}`}>
                      <a className="group flex gap-x-2 items-center py-2 pr-6 text-2xl hover:bg-gray-300 rounded hover:cursor-pointer">
                        <FaChevronRight className="text-xl group-hover:translate-x-1" />
                        <span>{link.label}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <nav>
            <ul className="space-y-2">
              {firstLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex gap-x-2 items-center py-2 pr-6 pl-2 text-2xl hover:bg-gray-300 rounded hover:cursor-pointer"
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <small className="block py-2 text-center text-gray-50 bg-gray-600">&copy; 2022 Shinji Takahashi</small>
    </div>
  );
};
