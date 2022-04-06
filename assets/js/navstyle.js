var aboutNav = document.querySelector("#about-box");
console.log(aboutNav);
aboutNav.addEventListener("click", function () {
  aboutNav.removeAttribute("style", "display: none");
});
aboutNav.addEventListener("click", function () {
  aboutNav.setAttribute("style", "display: none");
});
