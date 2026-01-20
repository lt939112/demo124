const openBtn = document.getElementById("openConsult");
const modal = document.getElementById("consultModal");
const closeBtn = document.getElementById("closeConsult");

openBtn.onclick = () => (modal.style.display = "flex");
closeBtn.onclick = () => (modal.style.display = "none");
