import type { FieldError } from "react-hook-form";

type Props = {
  errors: FieldError | undefined;
  isDisabled?: boolean;
  label: string;
  name: string;
  placeholder?: string;
  register: any;
  required?: boolean;
};

/**
 * @package
 */
export const TextArea = ({ errors, isDisabled, label, name, placeholder, register, required }: Props) => (
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

      {errors && <span className="ml-2 text-pink-600">{errors.message}</span>}
    </div>

    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      disabled={isDisabled}
      rows={3}
      {...register(name, {
        required: { value: required, message: "※ 入力が必要です" },
      })}
      className={`block mt-1 w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm sm:text-sm ${
        errors
          ? "focus:border-pink-500 focus:ring-pink-500 border-pink-500 text-pink-600"
          : "focus:outline-none  appearance-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
      }`}
    />
  </div>
);
