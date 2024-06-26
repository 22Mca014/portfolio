document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon1');
    const closeIcon = document.getElementById('menu-icon2');
    const navbar = document.querySelector('.navbar');

    function openMenu() {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        navbar.classList.add('responsive');
    }

    function closeMenu() {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        navbar.classList.remove('responsive');
    }

    menuIcon.addEventListener('click', openMenu);
    closeIcon.addEventListener('click', closeMenu);
});
// email
const form = document.querySelector('form[name="contact-form"]');
const scriptURL = 'https://script.google.com/macros/s/AKfycbwhT4cZk6yDQkR3D7lpyER3MMJpA1i0bduvo5IoUslFZdNLB05PaNMg3Iau01X71N7O/exec'; // Replace with your Web App URL

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert("Thank you! Your form is submitted successfully.");
      window.location.reload();
    })
    .catch(error => console.error('Error!', error.message));
});
