// Destino de las solicitudes (sin backend todavía: se abre el correo con los datos cargados)
const EMAIL_DESTINO = "estudiojuridiconova@gmail.com";

const form = document.getElementById("formConsulta");
const fecha = document.getElementById("fFecha");

// La fecha mínima es mañana
const manana = new Date(); manana.setDate(manana.getDate() + 1);
fecha.min = manana.toISOString().slice(0, 10);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.classList.add("was-validated"); return; }
  const d = Object.fromEntries(new FormData(form));
  const cuerpo = [
    `Nombre: ${d.nombre}`, `Teléfono: ${d.telefono}`, `Correo: ${d.email}`,
    `Materia / reclamo: ${d.materia || "No sabe — necesita orientación"}`,
    `Fecha de la entrevista: ${d.fecha} (${d.franja})`, "", "Motivo:", d.motivo,
  ].join("\n");
  window.location.href = `mailto:${EMAIL_DESTINO}?subject=${encodeURIComponent("Solicitud de consulta — " + d.nombre)}&body=${encodeURIComponent(cuerpo)}`;
  bootstrap.Modal.getInstance(document.getElementById("modalConsulta")).hide();
  form.reset(); form.classList.remove("was-validated");
});
