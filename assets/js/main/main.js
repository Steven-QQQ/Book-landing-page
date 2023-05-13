function toggleMenu(displayState) {
  const nav = document.querySelector("#header_navigation");
  const closeIco = document.querySelector("#close-ico");

  nav.style.display = displayState;
  closeIco.style.display = displayState;
}
