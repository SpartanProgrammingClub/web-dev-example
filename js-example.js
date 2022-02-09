// this file is used to show/hide the hidden parts of the webpage

var hidden = false;
document.getElementById("js-exmaple").onclick = toggleHidden;
// they start visible, so we hide them when the webpage is loaded
toggleHidden();

function toggleHidden() {
//   "block" means visible, "none" means hidden
  var state = hidden ? "block" : "none";
//   for every element part of the "hidden" class, set it to either "block" or "none" as decided above
  Array.from(document.getElementsByClassName("hidden")).forEach(
    (el) => (el.style.display = state)
  );  
  hidden = !hidden;
}
