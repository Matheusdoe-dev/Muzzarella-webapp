import { render, screen } from "@testing-library/react";

import { Header } from "@/components";

describe("Header component", () => {
  it("should render", () => {
    render(<Header />);

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should contain the logo", () => {
    render(<Header />);

    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  it("should contain the navbar", () => {
    render(<Header />);

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});
