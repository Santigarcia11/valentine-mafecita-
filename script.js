const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const letter = document.querySelector(".letter");

openBtn.addEventListener("click", () => {
  letter.style.display = "block";
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
  letter.style.display = "none";
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
});
