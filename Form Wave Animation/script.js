const labels = document.querySelectorAll(".form-control label");

labels.forEach((lebel) => {
  labels.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => `<span>${letter}</span>`)
    .join("");
});
