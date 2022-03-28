export const smoothScroll = () => {
  const navLinks = document.querySelectorAll(".header__nav>a");
  seamless.polyfill();
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.getAttribute("href").substring(1);
      const target = document.getElementById(id);

      seamless.scrollIntoView(target, {
        behavior: "smooth",
        block: "start",
      });
    });
  });
};
