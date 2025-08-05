const themeButton = document.getElementById("theme-icon");
const currentTheme = document.querySelector('html');

themeButton.addEventListener('click', () => {
  if(currentTheme.getAttribute('data-theme') === 'light') {
    currentTheme.setAttribute('data-theme', 'dark')
  } else {
    currentTheme.setAttribute('data-theme', 'light')
  }
});