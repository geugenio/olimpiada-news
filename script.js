// let entrada = parseInt(prompt("Digite o ano que voce nasceu:"));
// alert(2003 - entrada);
// alert(typeof entrada);
let section = document.querySelector("section");
function toDarkSide() {
  section.classList.add("dark-theme");
  section.classList.remove("light-theme");
}

function toJediSide() {
  section.classList.add("light-theme");
  section.classList.remove("dark-theme");
}
