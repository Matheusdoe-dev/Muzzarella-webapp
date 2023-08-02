import { render, screen } from "@testing-library/react";

import { Button } from "..";

describe("Button component", () => {
  it("should render", () => {
    render(<Button>Teste</Button>);

    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
});
