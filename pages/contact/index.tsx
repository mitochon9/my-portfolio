import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";
import { Contact } from "src/pages/contact";

const ContactPage: CustomNextPage = () => (
  <FluidLayout>
    <Contact />
  </FluidLayout>
);

export default ContactPage;
