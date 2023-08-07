import { render, screen } from "@testing-library/react";

import NavOptions from "./NavOptions";

import { NavOption } from "@/interfaces";

const NAV_OPTIONS_MOCK: NavOption[] = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "About", path: "/about-us" },
  { label: "FAQ", path: "/faq" },
];

describe("NavOptions component", () => {
  it("should render", () => {
    render(<NavOptions options={NAV_OPTIONS_MOCK} />);

    const navbarOptions = screen.getAllByTestId("navbar-option");

    expect(navbarOptions.length).toBe(NAV_OPTIONS_MOCK.length);
  });
});
