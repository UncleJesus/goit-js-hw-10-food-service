import menuCards from '../src/templates/menu-card.hbs';
import menu from './menu.json';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.body;
const menuConstainer = document.querySelector('.js-menu');
const menuCard = menuCards(menu);
const themeChanger = document.querySelector('.theme-switch__toggle');

themeChanger.addEventListener('change', themeSwitch);
menuConstainer.insertAdjacentHTML('beforeend', menuCard);

function themeSwitch() {
  if (themeChanger.checked) {
    localStorage.setItem('Theme', Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('Theme', Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }
}

const savedTheme = localStorage.getItem('Theme');
if (savedTheme === 'dark-theme') {
  body.classList.remove(Theme.LIGHT);
  body.classList.add(Theme.DARK);
  themeChanger.checked = true;
} else {
  body.classList.remove(Theme.DARK);
  body.classList.add(Theme.LIGHT);
}
