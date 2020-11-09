class Breadcrumbs {
  constructor(seletor) {
    this.seletor = seletor;
  }

  handleBreadcrumbs(event) {
    const links = document.querySelectorAll(this.seletor);

    links.forEach((link) => {
      link.classList.remove("active");
    });

    event.currentTarget.classList.add("active");
  }
}

export default Breadcrumbs;
