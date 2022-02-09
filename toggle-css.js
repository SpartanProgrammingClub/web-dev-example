// this file is used to disable/enable the CSS

var hasCSS = true;

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.type = "text/css";
stylesheet.href = "style.css";

const head = document.getElementsByTagName("head")[0];

head.appendChild(stylesheet);
toggleCSS();

document.getElementById("toggle-css").onclick = toggleCSS;

function toggleCSS() {
  if (!hasCSS) {
    head.appendChild(stylesheet);
  } else {
    head.removeChild(stylesheet);
  }
  hasCSS = !hasCSS;
}
