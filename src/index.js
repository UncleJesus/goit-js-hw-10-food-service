import menuCard from '../src/templates/menu-card.hbs';
import menu from './menu.json';
import './styles.css'; 

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.body;
const menuContainer = document.querySelector('.js-menu');
const menuCards = createMenuCardsMarkup(menu);
const themeChanger = document.querySelector('#theme-switch-toggle');
const savedTheme = localStorage.getItem('Theme');

themeChanger.addEventListener('change', themeSwitch);
menuContainer.insertAdjacentHTML('beforeend', menuCards);

body.classList.add(savedTheme);

if (savedTheme === Theme.DARK) { 
    themeChanger.checked = true;
}

function createMenuCardsMarkup(menuC) { 
    return menuC.map(menuCard).join('');
}

function themeSwitch(evt) {
   
    if (themeChanger.checked) {
        localStorage.setItem('Theme', Theme.DARK);
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        console.log(themeChanger.checked);
    }
    else {
        localStorage.setItem('Theme', Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        console.log(themeChanger.checked);
    }

}
