"use client";

import Link from "next/link";

import styles from "./Navbar.module.scss";
import { usePathname } from "next/navigation";

interface NavOption {
  label: string;
  path: string;
}

const NAV_OPTIONS: NavOption[] = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "About", path: "/about" },
  { label: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const navbarOptions = () =>
    NAV_OPTIONS.map(({ label, path }) => {
      const pathname = usePathname();
      const isActive = path === pathname;

      return (
        <li key={label} data-testid="navbar-option">
          <Link
            href={path}
            className={`${styles["navbar-list__option"]} ${
              isActive && styles["navbar-list__option--active"]
            }`}
          >
            {label}
          </Link>
        </li>
      );
    });

  return (
    <nav data-testid="navbar">
      <ul className={styles["navbar-list"]}>{navbarOptions()}</ul>
    </nav>
  );
};

export default Navbar;
