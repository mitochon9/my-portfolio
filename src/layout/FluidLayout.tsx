import type { CustomLayout } from "next";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { DrawerMenu } from "src/layout/DrawerMenu";
import { LayoutErrorBoundary } from "src/layout/LayoutErrorBoundary";

import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

/**
 * @package
 */
export const FluidLayout: CustomLayout = ({ children }: Props) => {
  const router = useRouter();
  return (
    <div id="home" className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>

      <main className={`flex-1 px-2 pb-16 bg-gray-600 ${router.pathname !== "/" ? "pt-[calc(64px+86px)]" : ""}`}>
        <div className="container mx-auto">
          <LayoutErrorBoundary>{children}</LayoutErrorBoundary>
        </div>
      </main>

      <div className="lg:hidden">
        <DrawerMenu />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
