import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useBreadcrumbs = () => {
  const history = useHistory();

  const { pathname } = history.location;

  useEffect(() => {
    const breadcrumbs = document.querySelectorAll('[data-anime="breadcrumbs"]');

    breadcrumbs.forEach((breadcrumb) => {
      breadcrumb.classList.remove("active");

      if (breadcrumb.getAttribute("href") === pathname) {
        if (breadcrumb.classList.contains("inactive")) {
          breadcrumb.classList.remove("inactive");
        }

        breadcrumb.classList.add("active");
      }
    });
  }, [pathname]);
};

export default useBreadcrumbs;
