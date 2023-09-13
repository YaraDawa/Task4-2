const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 20) {
    navbar.style.top = "0px";
    navbar.style.backgroundColor="rgb(116, 167, 194)"
  } else {
    navbar.style.top = "100px";
    navbar.style.backgroundColor="rgb(255 255 255 / 0%)"
  }
});