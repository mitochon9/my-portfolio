/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";
import { useRecoilValue } from "recoil";
import { headerHeightState } from "src/component/state/headerHeightAtom";
import { firstLinks, Logo, secondLinks } from "src/layout/Header";

export const DrawerMenu = () => {
  const headerHeight = useRecoilValue(headerHeightState);

  const router = useRouter();

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleToggleDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);
  const handleCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  return (
    <div>
      <button
        type="button"
        aria-label="handle toggle drawer button"
        onClick={handleToggleDrawer}
        className={`fixed right-0 top-0 z-50 w-12 h-12`}
      >
        {isDrawerOpen ? (
          <AiOutlineClose className="p-2 w-12 h-12 text-gray-50 bg-gray-600 border border-gray-600" />
        ) : (
          <AiOutlineMenu className="p-2 w-12 h-12 text-gray-50 bg-gray-600 border border-gray-600" />
        )}
      </button>

      <div
        className={`fixed top-0 z-40 overflow-auto w-screen h-full duration-300 bg-gray-100 ${
          isDrawerOpen ? "top-0" : "-top-[2000px]"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-start h-12">
              <Logo />
            </div>

            {router.pathname === "/" ? (
              <nav>
                <ul className="text-gray-700 last:border-b last:border-gray-300">
                  {secondLinks.map((link) => (
                    <li key={link.href} className="px-4 border-t border-gray-300">
                      <Scroll
                        to={link.href}
                        smooth
                        duration={600}
                        offset={-headerHeight}
                        onClick={handleCloseDrawer}
                        className="group flex gap-x-2 justify-between items-center py-4 text-xl hover:bg-gray-300 rounded hover:cursor-pointer"
                      >
                        <span>{link.label}</span>
                        <FaChevronRight />
                      </Scroll>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : (
              <nav>
                <ul className="text-gray-700 last:border-b last:border-gray-300">
                  {secondLinks.map((link) => (
                    <li key={link.href} className="px-4 border-t border-gray-300">
                      <Link href={`/#${link.href}`}>
                        <a className="group flex gap-x-2 justify-between items-center py-4 text-xl hover:bg-gray-300 rounded hover:cursor-pointer">
                          <span>{link.label}</span>
                          <FaChevronRight />
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <nav>
            <ul className="grid grid-cols-2 text-gray-100 bg-gray-600">
              {firstLinks.map((link) => (
                <li
                  key={link.label}
                  className={`${link.label === "Contact" ? "col-span-2 bg-rose-400 m-2 rounded" : ""}`}
                  onClick={handleCloseDrawer}
                >
                  <Link href={link.href}>
                    <a className="flex gap-x-1 justify-center items-center py-4">
                      {link.icon}
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
