"use client";

import { FC, memo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { NavOption } from "@/interfaces";

import styles from "./NavOptions.module.scss";

interface NavOptionsProps {
  options: NavOption[];
}

const NavOptions: FC<NavOptionsProps> = ({ options }) =>
  options.map(({ label, path }) => {
    const pathname = usePathname();
    const isActive = path === pathname;
    const linkClassName = `${styles.navbarListOption} ${
      isActive && styles.navbarListOptionActive
    }`;

    return (
      <li key={label} data-testid="navbar-option">
        <Link href={path ?? "/"} className={linkClassName}>
          {label}
        </Link>
      </li>
    );
  });

export default memo(NavOptions);
