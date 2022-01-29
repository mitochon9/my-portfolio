import { useRouter } from "next/router";
import type { VFC } from "react";
import { useState } from "react";
import { useCallback } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "src/component/Button";
import { Input, TextArea } from "src/component/Input";
import type { ContactFormData } from "src/types/contactFormData";

export const Contact: VFC = () => {
  const router = useRouter();

  const [isSubmit, setIsSubmit] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ContactFormData>({
    mode: "onBlur",
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<ContactFormData> = useCallback(
    async (formData) => {
      try {
        setIsSubmit(true);
        await fetch("api/send", {
          method: "POST",
          headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            companyName: formData.companyName,
            email: formData.email,
            message: formData.message,
          }),
        });

        router.replace("/contact/success");
      } finally {
        setIsSubmit(true);
      }
    },
    [router]
  );

  return (
    <div className="py-8 bg-gray-100 rounded">
      <h2 className="px-2 text-3xl italic font-bold text-gray-700 border-b-4 border-green-500 md:text-5xl md:border-b-8">
        Contact
      </h2>
      <h3 className="px-2 text-lg font-bold text-gray-700 md:text-xl">お問い合わせ</h3>

      <div className="px-2 mt-4 md:px-0">
        <p className="text-left md:text-center">ご質問・ご連絡は下記のフォームよりお送りください。</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="px-2 mx-auto mt-8 space-y-8 max-w-xl md:px-0">
        <Input isDisabled={isSubmit} errors={errors.name} label="お名前" name="name" register={register} required />

        <Input
          isDisabled={isSubmit}
          errors={errors.companyName}
          label="会社名"
          name="companyName"
          register={register}
        />

        <Input
          isDisabled={isSubmit}
          errors={errors.email}
          label="メールアドレス"
          name="email"
          register={register}
          required
          pattern={/^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/}
        />

        <TextArea
          isDisabled={isSubmit}
          errors={errors.message}
          label="お問い合わせ内容"
          name="message"
          register={register}
          required
        />

        <div className="text-right">
          <PrimaryButton type="submit" isDisabled={isSubmit}>
            送信
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};
