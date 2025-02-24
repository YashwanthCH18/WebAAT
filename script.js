const themeToggle = document.getElementById('theme-toggle');
let darkMode = false;

themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? '#333' : '#f7f4f8';
  document.body.style.color = darkMode ? '#fff' : '#333';
});

window.onscroll = function() {
  // Get the navbar element
  var navbar = document.querySelector('.navbar');
  
  // If the page is scrolled down by 50px or more, add the 'scrolled' class to the navbar
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
}