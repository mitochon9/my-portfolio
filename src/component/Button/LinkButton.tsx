import Link from "next/link";

type Props = {
  children: string;
  href: string;
};

/**
 * @package
 */
export const LinkButton = ({ children, href }: Props) => (
  <Link href={href}>
    <a className="group inline-flex relative items-center py-2 px-10 text-base font-bold text-green-500 hover:text-gray-50 hover:bg-green-500 rounded border-2 border-green-500 duration-300 lg:py-4 lg:px-12 lg:text-xl">
      {children}
    </a>
  </Link>
);
