import Link from "next/link";

type Props = {
  children: string;
  className?: string;
  href: string;
};

/**
 * @package
 */
export const LinkButton = ({ children, className, href }: Props) => (
  <Link href={href}>
    <a
      className={`group relative w-full py-2 px-4 text-base font-bold shadow flex justify-center items-center rounded duration-300 lg:py-4 lg:px-6 lg:text-xl ${className}`}
    >
      {children}
    </a>
  </Link>
);
