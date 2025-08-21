const nombreUsuario = document.querySelector("#nombre-usuario");
const generoUsuario = document.querySelector("#genero-usuario");
const edadUsuario = document.querySelector("#edad-usuario");
const idiomaUsuario = document.querySelector("#idioma-usuario");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#form-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreUsuario.value;
  const genero = generoUsuario.value;
  const edad = parseInt(edadUsuario.value, 10);
  const idioma = idiomaUsuario.value;
  const hora = new Date().getHours();

  let saludoHoraEs, saludoHoraEn;
  if (hora >= 6 && hora < 12) {
    saludoHoraEs = "Buenos días";
    saludoHoraEn = "Good morning";
  } else if (hora >= 12 && hora < 20) {
    saludoHoraEs = "Buenas tardes";
    saludoHoraEn = "Good afternoon";
  } else {
    saludoHoraEs = "Buenas noches";
    saludoHoraEn = "Good evening";
  }

  let prefijoEs = "", prefijoEn = "";
  if (edad > 30) {
    if (genero === "masculino") {
      prefijoEs = "Sr.";
      prefijoEn = "Mr.";
    } else if (genero === "femenino") {
      prefijoEs = "Sra.";
      prefijoEn = "Mrs.";
    }
  }

  let saludoFinal = "";
  if (idioma === "es") {
    saludoFinal = `<p>${saludoHoraEs} ${prefijoEs} ${nombre}</p>`;
  } else {
    saludoFinal = `<p>${saludoHoraEn} ${prefijoEn} ${nombre}</p>`;
  }

  div.innerHTML = saludoFinal;
});