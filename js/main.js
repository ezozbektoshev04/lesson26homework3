let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

document.querySelector("#menu").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("showmenu");
});

const loading = document.getElementById("loading");
window.addEventListener("load", () => {
  loading.classList.add("loading-none");
});
