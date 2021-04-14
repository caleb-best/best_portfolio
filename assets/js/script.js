$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });


//Modal
const porfolioButton1 = document.querySelector('#portfolio1');
const exitModal = document.querySelector('#closeModal');
const modal = document.querySelector('.modal')

porfolioButton1.addEventListener('click', () => {
    modal.classList.add('is-active');
})

exitModal.addEventListener('click', () => {
    modal.classList.remove('is-active');
});
