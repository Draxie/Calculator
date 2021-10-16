const themeBtn = document.querySelector('.switch');
var selector = document.getElementById('selector');
function getCurrentTheme(){
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  localStorage.getItem('calculator.theme') ? theme = localStorage.getItem('calculator.theme') : null;
  return theme;
}

function loadTheme(theme){
  const root = document.querySelector(':root');
  root.setAttribute('color-scheme', `${theme}`);
  switch(theme) {
    case "dark":
        selector.className="selector first-theme"
      break;
    case "light":
        selector.className="selector second-theme"
      break;
    case "purple":
        selector.className="selector third-theme"
      break;
  }
}

themeBtn.addEventListener('click', () => {
  let theme = getCurrentTheme();
  if(theme === 'dark'){
    selector.className="selector second-theme"
    theme = 'light';
  } 
  else if (theme === 'light'){
    selector.className="selector third-theme"
    theme = 'purple';
  }
  else{
    selector.className="selector first-theme"
    theme = 'dark'
  }
  localStorage.setItem('calculator.theme', `${theme}`);
  loadTheme(theme);
})

window.addEventListener('DOMContentLoaded', () => {
  loadTheme(getCurrentTheme());
})