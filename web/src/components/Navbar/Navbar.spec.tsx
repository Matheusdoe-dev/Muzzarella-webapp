import { render, screen } from "@testing-library/react";

import { Navbar } from "..";

describe("Navbar component", () => {
  it("should render", () => {
    render(<Navbar />);

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("should have four navigation options", () => {
    render(<Navbar />);

    expect(screen.getByTestId("navbar")).toMatchSnapshot();
    expect(screen.getAllByTestId("navbar-option").length).toBe(4);
  });
});
