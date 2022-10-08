'use strict'

/*
Логика №2:
1)Получаем объект бургера
2))Получаем объект меню родительский
3)Вешаем обработчик событий на click на бургер(п.1)
4)Добавляем класс к меню(п.2)
*/


const menuBurger = document.querySelector(".icon-menu");
const menu = menuBurger.closest(".menu");
const body = document.querySelector('body');
if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		if (menu) {
			menu.classList.toggle("_active");
			body.classList.toggle('lock');
		}
	});
}