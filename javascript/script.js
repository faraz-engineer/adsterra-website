const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

const links = document.querySelectorAll('.button-group a');

// Add click event listener to each link
links.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    links.forEach(item => item.classList.remove('active'));

    this.classList.add('active');
  });
});

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
})

document.querySelectorAll("").forEach(n => n.
addEventListener("click", () => {
  hamburger.classList.remove("active");
  navbar.classList.remove("active");
}))

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});