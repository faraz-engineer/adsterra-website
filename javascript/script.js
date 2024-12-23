
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

document.querySelectorAll("navbar a").forEach(n => n.
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


function toggleHide(event) {

  let faqParent = event.currentTarget.closest('.faq-parent');
  faqParent.classList.toggle('faq-item-closed');
}


function onClickAdvetiserPublisherToggleButton(className) {
  let publisherSection = document.getElementById('publisher-points-list');
  let publisherSectionBtn = document.getElementById('publisher-points-list-btn');


  let advertiserSection = document.getElementById('advertiser-points-list');
  let advertiserSectionBtn = document.getElementById('advertiser-points-list-btn');

  if (className === 'publisher') {
    // Add 'display-none' class to advertiser section and remove it from publisher section
    advertiserSection.classList.add('display-none');
    publisherSection.classList.remove('display-none');
    publisherSectionBtn.classList.add('active');
    advertiserSectionBtn.classList.remove('active');
  } else {
    // Add 'display-none' class to publisher section and remove it from advertiser section
    publisherSection.classList.add('display-none');
    advertiserSection.classList.remove('display-none');
    publisherSectionBtn.classList.remove('active');
    advertiserSectionBtn.classList.add('active');
  }
}
function toggleMenu(element) {
  const submenu = element.nextElementSibling;
  if (submenu.classList.contains('active')) {
    submenu.classList.remove('active');
    submenu.style.display = 'none';
  } else {
    document.querySelectorAll('.submenu.active').forEach(activeMenu => {
      activeMenu.classList.remove('active');
      activeMenu.style.display = 'none';
    });
    submenu.classList.add('active');
    submenu.style.display = 'block';
  }


  const svgIcon = element.querySelector('.rotate-icon');


  if (svgIcon) {

    const isRotated = svgIcon.style.transform === 'rotate(180deg)';
    svgIcon.style.transform = isRotated ? 'rotate(0deg)' : 'rotate(180deg)';


    svgIcon.style.transition = 'transform 0.3s ease';
  }
  document.addEventListener('click', function handleClickOutside(event) {
    if (!element.contains(event.target) && !submenu.contains(event.target)) {
      submenu.classList.remove('active');
      submenu.style.display = 'none';

      if (svgIcon) {
        svgIcon.style.transform = 'rotate(0deg)';
      }
      document.removeEventListener('click', handleClickOutside);
    }
  });
}
