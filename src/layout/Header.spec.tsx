/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { Header } from "src/layout/Header";

describe("Header", () => {
  it("renders a heading", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", { name: /Takahashi/i });
    expect(heading).toBeInTheDocument();
  });
});
