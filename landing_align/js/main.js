const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__nav')
const menuClose = document.querySelector('.header__close')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
	menu.classList.add('is-show')
	body.style.overflow = 'hidden'
})

menuClose.addEventListener('click', () => {
	menu.classList.remove('is-show')
	body.style.overflow = 'auto'
})