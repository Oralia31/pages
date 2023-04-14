function showMenu() {
  if (document.getElementById("navbar-mobile").className === "nav-mobile") {
    document.getElementById("navbar-mobile").classList.add("show-nav");
  } else {
    document.getElementById("navbar-mobile").classList.remove("show-nav");
  }
}
