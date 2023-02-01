// let entrada = parseInt(prompt("Digite o ano que voce nasceu:"));
// alert(2003 - entrada);
// alert(typeof entrada);
let section = document.querySelector("section");
let header = document.querySelector("header");
// function toDarkSide() {
//   section.classList.add("dark-theme");
//   section.classList.remove("light-theme");
// }

// function toJediSide() {
//   section.classList.add("light-theme");
//   section.classList.remove("dark-theme");
// }

function switchDarkLight() {
  section.classList.toggle("dark-theme");
  header.classList.toggle("dark-theme");
}