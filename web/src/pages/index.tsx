import { Logo } from "@/components";

interface NavOption {
  label: string;
  path: string;
}

const NAV_OPTIONS: NavOption[] = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/" },
  { label: "About", path: "/" },
  { label: "FAQ", path: "/" },
  { label: "Order", path: "/" },
];

const Home = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Home;
