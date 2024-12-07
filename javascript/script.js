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
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        links.forEach(item => item.classList.remove('active'));

        this.classList.add('active');
      });
    });



    