// hooks
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

// breadcrumbs custom hooks
const useBreadcrumbs = () => {
  const history = useHistory();

  // destructuring pathname from history
  const { pathname } = history.location;

  useEffect(() => {
    // selecting all breadcrumbs and creating Arry from Nodelist that will be returned
    const breadcrumbs = Array.from(
      document.querySelectorAll('[data-anime="breadcrumbs"]')
    );

    // a boolean key to stop the inactive class remotion from breadcrumbs when a breadcrumb is active.
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
