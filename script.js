// Мобильное меню
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav");

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('open')
})
window.addEventListener("scroll", () => {
  navbar.classList.remove("open");
});

// Модальное окно
const modal = document.getElementById("modal"); // Кнопка открытия

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}