const sections = document.getElementsByTagName("section");
for (var i = 0; i < sections.length; i++) {
  const section = sections.item(i);
  section.id = i + 1;
  if (!section.classList.contains("nonumber")) {
    const number_div = document.createElement("div");
    number_div.classList.add("slidenumber");
    number_div.textContent = "# " + (i + 1);
    section.appendChild(number_div);
  }
}
var idx = parseInt(location.href.split("#").pop());
if (isNaN(idx)) {
  idx = 1;
}
function next() {
  if (idx < sections.length) {
    idx += 1;
  }
  location.href = "#" + idx;
}
function prev() {
  if (idx > 1) {
    idx -= 1;
  }
  location.href = "#" + idx;
}
document.addEventListener(
  "keydown",
  e => {
    if (e.key == "PageDown" || e.key == "ArrowRight") {
      next();
    } else if (e.key == "PageUp" || e.key == "ArrowLeft") {
      prev();
    }
  }
);
document.addEventListener(
  "wheel",
  e => {
    if (e.deltaY > 0) {
      next();
    } else {
      prev();
    }
  }
);
