//your JS code here. If required.
const fontSize = document.getElementById("fontsize");
const fontColor = document.getElementById("fontcolor");
const btn = document.getElementById("save");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.cookie = `fontsize=${fontSize.value}; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/; SameSite=Strict`;
  document.cookie = `fontcolor=${fontColor.value}; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/; SameSite=Strict`;
  console.log("Cookies after save:", document.cookie);
});



window.addEventListener("load", () => {
  const cookies = document.cookie.split("; ");
  let fontSize, fontColor;
  
  for (let cookie of cookies) {
    if (cookie.startsWith("fontsize=")) fontSize = cookie.split("=")[1];
    if (cookie.startsWith("fontcolor=")) fontColor = cookie.split("=")[1];
  }
  if (fontSize) document.body.style.fontSize = `${fontSize}px`;
  if (fontColor) document.body.style.color = fontColor;
});