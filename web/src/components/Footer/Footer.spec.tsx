import { render, screen } from "@testing-library/react";

import { Footer } from "..";

describe("Footer component", () => {
  it("should render", () => {
    render(<Footer />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
