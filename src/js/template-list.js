import templateList from '../templates/food-list.hbs';
import menu from '../menu.json';

// создаем разметку
const markup = templateList(menu);

// ссылка на UL-галереи
const galeryRef = document.querySelector('ul.js-menu');
galeryRef.insertAdjacentHTML('afterbegin', markup);
