const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// ссылка на input
const switcherRef = document.querySelector('#theme-switch-toggle');
// слушатель события change на input
switcherRef.addEventListener('change', onChangeThemeColor);

function onChangeThemeColor(event) {
  // event.currentTarget = switcherRef
  // если input checked, т.е. переключен, то добавляем клас Theme.DARK и наоборот
  event.currentTarget.checked
    ? document.body.setAttribute('class', Theme.DARK)
    : document.body.setAttribute('class', Theme.LIGHT);

  // получаем значение атрибута class, который действует в данный момент
  const currentColorTheme = document.body.getAttribute('class');
  // записываем значение атрибута class в localStorage в переменную themeColor и при изменении - перезаписываем
  localStorage.setItem('themeColor', currentColorTheme);
}

// получаем значение переменной themeColor, записанной в localStorage
const themeColorAfterEffect = localStorage.getItem('themeColor');
// устанавливаем class для body, значение которого берем в localStorage
document.body.setAttribute('class', themeColorAfterEffect);

// При перезагрузке страницы, если тема темная, то добавляй input свойство checked, которое будет переводить ползунок в правую часть
if (themeColorAfterEffect === Theme.DARK) {
  switcherRef.setAttribute('checked', '');
}
