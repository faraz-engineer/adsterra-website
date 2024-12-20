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

function toggleMenu(element) {
  // Find the submenu next to the clicked span
  let submenu = element.nextElementSibling;

  // Toggle display of the submenu
  if (submenu.classList.contains('active')) {
      submenu.classList.remove('active');
      submenu.style.display = 'none';
  } else {
      // Close any other open menus
      document.querySelectorAll('.submenu.active').forEach(menu => {
          menu.classList.remove('active');
          menu.style.display = 'none';
      });

      submenu.classList.add('active');
      submenu.style.display = 'block';
  }

  // Select the SVG icon within the clicked span
  let svgIcon = element.querySelector('.rotate-icon');

  // Toggle rotation of the icon
  let currentRotation = svgIcon.style.transform;
  if (currentRotation === 'rotate(180deg)') {
      svgIcon.style.transform = 'rotate(0deg)';
  } else {
      svgIcon.style.transform = 'rotate(180deg)';
  }

  // Add smooth animation
  svgIcon.style.transition = 'transform 0.3s ease';
}
