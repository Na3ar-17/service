let button = document.getElementById("btn"),
  menu = document.getElementById("openMenu"),
  closebtn = document.getElementById("closeBTN"),
  html = document.getElementById("html");

let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4");
let link5 = document.getElementById("link5");

button.addEventListener("click", () => {
  menu.style.display = "block";
  button.style.display = "none";
  closebtn.style.display = "block";
  html.style.overflow = "hidden";
});

closebtn.addEventListener("click", () => {
  menu.style.display = "none";
  closebtn.style.display = "none";
  button.style.display = "block";
  html.style.overflow = "scroll";
});

link1.addEventListener("click", () => {
  html.style.overflow = "scroll";
  menu.style.display = "none";
  closebtn.style.display = "none";
  button.style.display = "block";
});

link2.addEventListener("click", () => {
  html.style.overflow = "scroll";
  menu.style.display = "none";
  closebtn.style.display = "none";
  button.style.display = "block";
});
link3.addEventListener("click", () => {
  html.style.overflow = "scroll";
  menu.style.display = "none";
  closebtn.style.display = "none";
  button.style.display = "block";
});
link4.addEventListener("click", () => {
  html.style.overflow = "scroll";
  menu.style.display = "none";
  closebtn.style.display = "none";
  button.style.display = "block";
});
link5.addEventListener("click", () => {
  html.style.overflow = "scroll";
  menu.style.display = "none";
  closebtn.style.display = "none";
  button.style.display = "block";
});

let buttonCards1 = document.getElementById("btn1"),
  buttonCards2 = document.getElementById("btn2"),
  buttonCards3 = document.getElementById("btn3"),
  buttonContactUs = document.getElementById("btn_contactUS"),
  buttonPrice1 = document.getElementById("btn_price1"),
  buttonPrice2 = document.getElementById("btn_price2"),
  buttonPrice3 = document.getElementById("btn_price3");

buttonCards1.addEventListener("click", () => {
  location.href = "#section5";
});

buttonCards2.addEventListener("click", () => {
  location.href = "#section5";
});

buttonCards3.addEventListener("click", () => {
  location.href = "#section5";
});

buttonContactUs.addEventListener("click", () => {
  location.href = "#section5";
});

buttonPrice1.addEventListener("click", () => {
  location.href = "#section5";
});

buttonPrice2.addEventListener("click", () => {
  location.href = "#section5";
});

buttonPrice3.addEventListener("click", () => {
  location.href = "#section5";
});
