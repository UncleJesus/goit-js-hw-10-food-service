import menuCards from '../src/templates/menu-card.hbs';
import menu from './menu.json';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.body;
const menuConstainer = document.querySelector('.js-menu');
const menuCard = createdCardMarkup(menu);
const themeChanger = document.querySelector('.theme-switch__toggle');

themeChanger.addEventListener('change', themeSwitch);
menuConstainer.insertAdjacentHTML('beforeend', menuCard);

function createdCardMarkup(menuCreator) {
  return menuCreator.map(menuCards).join(``);
}

function themeSwitch(evt) {
  if (themeChanger.checked) {
    localStorage.setItem('Theme', Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    console.log(themeChanger.checked);
  } else {
    localStorage.setItem('Theme', Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    console.log(themeChanger.checked);
  }
}
