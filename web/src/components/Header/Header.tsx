import { Logo, Navbar } from "@/components";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header data-testid="header" className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
