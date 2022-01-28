import type { CustomLayout } from "next";
import type { ReactNode } from "react";
import { LayoutErrorBoundary } from "src/layout/LayoutErrorBoundary";

import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

/**
 * @package
 */
export const FluidLayout: CustomLayout = ({ children }: Props) => (
  <div className="flex flex-col min-h-screen">
    <header>
      <Header />
    </header>

    <main className="flex-1 bg-blue-100">
      <LayoutErrorBoundary>{children}</LayoutErrorBoundary>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
);
