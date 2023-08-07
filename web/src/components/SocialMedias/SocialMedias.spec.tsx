import { render, screen } from "@testing-library/react";

import SocialMedias from "./SocialMedias";

describe("SocialMedias component", () => {
  it("should render", () => {
    render(<SocialMedias />);

    expect(screen.getByTestId("social-medias")).toMatchSnapshot();
    expect(screen.getByTestId("social-medias")).toBeInTheDocument();
  });
});
