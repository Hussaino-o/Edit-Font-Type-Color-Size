let fontType = document.querySelector(".font-type");
let fontTypeOpt = document.querySelectorAll(".font-type option");
let fontColor = document.querySelector(".color-type");
let fontColorOpt = document.querySelectorAll(".color-type option");
let fontSize = document.querySelector(".font-size");
let fontSizeOpt = document.querySelectorAll(".font-size option");
let font = document.querySelector("h1");

window.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem("fontType")) {
    fontTypeOpt.forEach((e) => {
      if (e.value === localStorage.getItem("fontType")) {
        e.setAttribute("selected", "");
      }
    });
  }
  if (localStorage.getItem("fontColor")) {
    fontColorOpt.forEach((e) => {
      if (e.value === localStorage.getItem("fontColor")) {
        e.setAttribute("selected", "");
      }
    });
  }
  if (localStorage.getItem("fontSize")) {
    fontSizeOpt.forEach((e) => {
      if (e.value === localStorage.getItem("fontSize")) {
        e.setAttribute("selected", "");
      }
    });
  }

  font.style.fontFamily = fontType.value;
  font.style.color = fontColor.value;
  font.style.fontSize = `${fontSize.value}px`;
});

fontType.onchange = (e) => {
  font.style.fontFamily = fontType.value;
  localStorage.setItem("fontType", fontType.value);
};
fontColor.onchange = (e) => {
  font.style.color = fontColor.value;
  localStorage.setItem("fontColor", fontColor.value);
};
fontSize.onchange = (e) => {
  font.style.fontSize = `${fontSize.value}px`;
  localStorage.setItem("fontSize", fontSize.value);
};

console.log(fontType.value);
