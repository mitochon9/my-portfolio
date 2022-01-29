import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";
import { Success } from "src/pages/contact/Success";

const SuccessPage: CustomNextPage = () => (
  <FluidLayout>
    <Success />;
  </FluidLayout>
);

export default SuccessPage;
