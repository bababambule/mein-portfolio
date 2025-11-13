export function initMobileMenu() {
  const menuButton = document.getElementById("mobile-menu-button");
  const closeButton = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("mobile-menu-overlay");
  const menuLinks = document.querySelectorAll(".mobile-menu-link");

  function openMenu() {
    mobileMenu?.classList.remove("translate-x-full");
    overlay?.classList.remove("opacity-0", "pointer-events-none");
    document.body.style.overflow = "hidden"; // Verhindert Scrollen
  }

  function closeMenu() {
    mobileMenu?.classList.add("translate-x-full");
    overlay?.classList.add("opacity-0", "pointer-events-none");
    document.body.style.overflow = ""; // Erlaubt wieder Scrollen
  }

  // Event Listeners
  menuButton?.addEventListener("click", openMenu);
  closeButton?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", closeMenu);

  // Schließe Menu wenn auf Link geklickt wird
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Schließe Menu mit ESC-Taste
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
}
