document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector(".hamburguesa");
  const menu = document.querySelector(".navbar");

  if (!boton || !menu) return;

  boton.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", abierto);
  });

  menu.querySelectorAll(".enlace").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("abierto");
      boton.setAttribute("aria-expanded", "false");
    });
  });
});
