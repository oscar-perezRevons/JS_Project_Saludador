const nombreUsuario = document.querySelector("#nombre-usuario");
const generoUsuario = document.querySelector("#genero-usuario");
const edadUsuario = document.querySelector("#edad-usuario");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#form-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = nombreUsuario.value;
  const genero = generoUsuario.value;
  const edad = parseInt(edadUsuario.value, 10);
  const hora = new Date().getHours();

  let saludoHora;
  if (hora >= 6 && hora < 12) {
    saludoHora = "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    saludoHora = "Buenas tardes";
  } else {
    saludoHora = "Buenas noches";
  }

  let prefijo = "";
  if (edad > 30) {
    if (genero === "masculino") {
      prefijo = "Sr.";
    } else if (genero === "femenino") {
      prefijo = "Sra.";
    } else {
      prefijo = "";
    }
  }

  div.innerHTML = `<p>${saludoHora} ${prefijo} ${nombre}</p>`;
});