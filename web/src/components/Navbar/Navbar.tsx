import { NavOptions } from "@/components";
import { NavOption } from "@/interfaces";

import styles from "./Navbar.module.scss";

const NAV_OPTIONS: NavOption[] = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "About", path: "/about-us" },
  { label: "FAQ", path: "/faq" },
];

const Navbar = () => {
  return (
    <nav data-testid="navbar">
      <ul className={styles.navbarList}>
        <NavOptions options={NAV_OPTIONS} />
      </ul>
    </nav>
  );
};

export default Navbar;
