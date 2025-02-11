const themeToggle = document.getElementById('theme-toggle');
let darkMode = false;

themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? '#333' : '#f7f4f8';
  document.body.style.color = darkMode ? '#fff' : '#333';
});