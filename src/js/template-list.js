import templateList from '../templates/food-list.hbs'; // результат ф-я
import menu from '../menu.json'; // импортируется уже как обьект, а не текст

// создаем разметку, запуская ф-ю templateList и передавая ей обьект
const markup = templateList(menu);

// ссылка на UL-галереи
const galeryRef = document.querySelector('ul.js-menu');
galeryRef.insertAdjacentHTML('afterbegin', markup);
