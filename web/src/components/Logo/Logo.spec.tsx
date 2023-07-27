import { render, screen } from "@testing-library/react";

import Logo from "./Logo";

describe("Logo component", () => {
  it("should render", () => {
    render(<Logo />);

    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });
});
