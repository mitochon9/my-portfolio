import type { VFC } from "react";
import { LinkButton } from "src/component/Button";

export const Custom404: VFC = () => (
  <div className="flex justify-center items-center">
    <div className="py-24 px-4 w-full max-w-5xl text-center bg-gray-50 rounded sm:px-6 lg:px-8">
      <div className="inline-block gap-x-4 justify-center items-center md:flex md:divide-x md:divide-gray-400">
        <div className="text-5xl font-bold text-left text-green-500 md:text-center">404</div>
        <div className="text-left md:pl-4">
          <h1 className="text-5xl font-bold">Page not found</h1>
          <p className="mt-2 text-gray-700">Please check the URL in the address bar and try again.</p>
        </div>
      </div>

      <div className="flex gap-x-4 justify-center mt-4">
        <div className="rounded-md shadow">
          <LinkButton href="/">Go back home</LinkButton>
        </div>
        <div></div>
      </div>
    </div>
  </div>
);
