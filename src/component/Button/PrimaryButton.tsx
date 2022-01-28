import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: VoidFunction;
  isDisabled?: boolean | undefined;
};

/**
 * @package
 */
export const PrimaryButton = (props: Props) => {
  const { children, isDisabled, onClick, type } = props;

  return (
    <button
      className={`group inline-flex relative items-center py-2 px-12 text-xl font-bold  rounded border-2
      }
        ${
          isDisabled
            ? "bg-gray-300 border-gray-300"
            : "text-green-500 hover:text-gray-50 border-green-500 duration-300 hover:bg-green-500"
        }`}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
