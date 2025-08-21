const nombreUsuario = document.querySelector("#nombre-usuario");
const generoUsuario = document.querySelector("#genero-usuario");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#form-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = nombreUsuario.value;
  const genero = generoUsuario.value;
  const hora = new Date().getHours();

  let saludoHora;
  if (hora >= 6 && hora < 12) {
    saludoHora = "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    saludoHora = "Buenas tardes";
  } else {
    saludoHora = "Buenas noches";
  }

  let saludoGenero;
  if (genero === "masculino") {
    saludoGenero = "señor";
  } else if (genero === "femenino") {
    saludoGenero = "señora";
  }
  div.innerHTML = `<p>${saludoHora} ${saludoGenero} ${nombre}</p>`;
});