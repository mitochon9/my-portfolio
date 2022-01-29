import type { FieldError } from "react-hook-form";

type Props = {
  errors: FieldError | undefined;
  isDisabled?: boolean;
  label: string;
  name: string;
  pattern?: RegExp;
  placeholder?: string;
  register: any;
  required?: boolean;
};

/**
 * @package
 */
export const Input = ({ errors, isDisabled, label, name, pattern, placeholder, register, required }: Props) => (
  <div>
    <div className="flex justify-between items-center">
      <label
        htmlFor={name}
        className={`text-sm font-medium text-gray-700 ${
          required ? "after:ml-0.5 after:text-red-500 after:content-['*']" : ""
        }`}
      >
        {label}
      </label>

      {errors && <span className="block text-right text-pink-600">{errors.message}</span>}
    </div>

    <input
      id={name}
      name={name}
      placeholder={placeholder}
      disabled={isDisabled}
      {...register(name, {
        required: { value: required, message: "※ 入力が必要です" },
        pattern: {
          value: pattern,
          message: "※ 無効な形式です",
        },
      })}
      className={`block mt-1 w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm py-2 px-3 ${
        errors ? "focus:border-pink-500 focus:ring-pink-500 border-pink-500 text-pink-600" : ""
      }`}
    />
  </div>
);
