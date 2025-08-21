const nombreUsuario = document.querySelector("#nombre-usuario");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#form-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<p>Hola " + nombreUsuario.value + "</p>";
});