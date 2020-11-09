import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useBreadcrumbs = () => {
  const history = useHistory();

  const { pathname } = history.location;

  useEffect(() => {
    const breadcrumbs = Array.from(
      document.querySelectorAll('[data-anime="breadcrumbs"]')
    );
    let key = false;

    breadcrumbs.forEach((breadcrumb, index) => {
      if (key === false && breadcrumb.classList.contains("inactive")) {
        breadcrumb.classList.remove("inactive");
      }

      if (
        pathname === "/order/create-account" &&
        breadcrumb.getAttribute("href") === "/order/signin"
      ) {
        breadcrumb.classList.add("active");

        key = true;
      }

      if (
        (pathname === "/order/customize" || pathname === "/order/premade") &&
        breadcrumb.getAttribute("href") === "/order/choose"
      ) {
        breadcrumb.classList.add("active");

        key = true;
      }

      if (breadcrumb.getAttribute("href") === pathname) {
        key = true;

        breadcrumb.classList.add("active");
      }
    });
  }, [pathname]);
};

export default useBreadcrumbs;
