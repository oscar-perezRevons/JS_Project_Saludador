const nombreUsuario = document.querySelector("#nombre-usuario");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#form-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = nombreUsuario.value;
  const hora = new Date().getHours();

  let saludo;
  if (hora >= 6 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  div.innerHTML = `<p>${saludo} ${nombre}</p>`;
});