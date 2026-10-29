
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const yearElement = document.getElementById("year");

// Atualiza automaticamente o ano do rodapé.
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Abre e fecha o menu em celulares.
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  // Fecha o menu depois que uma seção é selecionada.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
      menuToggle.textContent = "☰";
    });
  });
}
