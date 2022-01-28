import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";
import { Custom404 } from "src/pages/Custom404";

const Custom404Page: CustomNextPage = () => (
  <FluidLayout>
    <Custom404 />
  </FluidLayout>
);

export default Custom404Page;
