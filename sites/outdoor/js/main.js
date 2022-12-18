const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.addEventListener('click', () => {
	burger.classList.toggle('is-close')
	menu.classList.toggle('is-show')
})