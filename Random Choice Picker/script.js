const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyiup", (e) => {
  createTags(e.target.value);
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.getElementById("span");
    tagEl.classList.add("tag");
    tagEl.innerHTML = tag;
    tagsEl.appendChild(tagEl);
  });
}
