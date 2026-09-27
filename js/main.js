const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const form = document.getElementById("form-agendar");
const msg = document.getElementById("form-msg");

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  const nome = String(data.get("nome") || "").trim();
  msg.hidden = false;
  msg.textContent = `Pedido enviado, ${nome}. Em breve confirmamos o horário.`;
  form.reset();
});
