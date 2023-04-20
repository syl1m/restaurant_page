import "./style.css";
import homeContent from "./home.js";
import menuContent from "./menu.js";
import contactContent from "./contact.js";
import fishIcon from "./images/fish_logo.png";
import githubIcon from "./images/github_icon.svg";

const content = document.querySelector("#content");

document.body.insertBefore(createHeader(), content);
content.appendChild(homeContent());
document.body.appendChild(createFooter());

// Add event listeners for Home, Menu, Contact elements
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

home.addEventListener("click", () => {
  content.textContent = "";
  content.appendChild(homeContent());
});

menu.addEventListener("click", () => {
  content.textContent = "";
  content.appendChild(menuContent());
});

contact.addEventListener("click", () => {
  content.textContent = "";
  content.appendChild(contactContent());
});

function createHeader() {
  const header = document.createElement("header");
  const nameLogo = document.createElement("div");
  const navigator = document.createElement("div");

  nameLogo.classList.add("name_logo");
  navigator.classList.add("navigator");

  //   Create Name and Logo elements
  const fish_Icon = new Image();
  fish_Icon.src = fishIcon;
  nameLogo.appendChild(fish_Icon);

  const name = document.createElement("div");
  name.classList.add("header_name");
  name.textContent = "umai sushi";
  nameLogo.appendChild(name);

  //   Create navigator menu elements
  const home = document.createElement("div");
  home.classList.add("nav_item");
  home.classList.add("home");
  home.textContent = "HOME";
  navigator.appendChild(home);

  const menu = document.createElement("div");
  menu.classList.add("nav_item");
  menu.classList.add("menu");
  menu.textContent = "MENU";
  navigator.appendChild(menu);

  const contact = document.createElement("div");
  contact.classList.add("nav_item");
  contact.classList.add("contact");
  contact.textContent = "CONTACT";
  navigator.appendChild(contact);

  //   Add elements to header
  header.appendChild(nameLogo);
  header.appendChild(navigator);

  return header;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "Copyright © 2023 Sheng-Yau Lim";

  const github_Icon = new Image();
  github_Icon.src = githubIcon;
  footer.appendChild(github_Icon);

  return footer;
}
