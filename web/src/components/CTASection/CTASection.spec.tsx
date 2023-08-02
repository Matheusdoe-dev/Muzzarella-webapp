import { render, screen } from "@testing-library/react";

import { CTASection } from "..";

describe("Button component", () => {
  it("should render", () => {
    render(<CTASection />);

    expect(screen.getByTestId("cta-section")).toBeInTheDocument();
  });
});
