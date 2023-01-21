// console.log("Hello, world!")
// console.error("Моя ошибка")

// Комментарии с помощью // и /* */

/**
 * Типы данных:
 * 1. String - строка "", '', ``
 * 2. Number - число 0-9
 * 3. Boolean - логический тип данных (true/false)
 * 4. Undefined - неопределено
 * 5. Null - нулевое значение
 * 6. Object - объект
 * 7. Symbol
 * 8. BigInt
 *
 * typeof - метод для определения типа данных
 */

/**
 * Переменная
 * let, const, var
 */

// let fruit = "apple"
// console.log(fruit)

// fruit = "orange"
// console.log(fruit)

// const name = "Nikita"
// console.log(`My name is ${name} and my old ${12 + 10}`)

// const name
// const old

// const animal = "Zebra"

// console.log(`It is ${animal}`)

// if...else - условия
// let num = 10
// if (num === 9 && num === 10) {
//     console.log("num равно 9 или 10")
// } else if (num === 5) {
//     console.log("num равно 5")
// } else {
//     console.log("num равен 10")
// }

/**
 * Операторы сравнения
 * 1. == - нестрогое сравнение
 * 2. === - строгое сравнение
 * 3. ! - не равно
 * 4. > - больше
 * 5. < - меньше
 * 6. <= - меньше или равно
 * 7. >= - больше или равно
 */

/**
 * && - и
 * || - или
 */

// for (let i = 0; i < 4; i++) {
//     console.log("Hello", i)
// }

/**
 * Инкремент:
 * i++
 * i = i + 1
 */

/**
 * Декремент:
 * i--
 * i = i - 1
 */

/**
 * Стили написания переменных
 * KebabCase - btn-plus
 * SnakeCase - btn_plus
 * CamelCase - btnPlus
 */

const btnMinus = document.querySelector(".btn-minus")
const btnPlus = document.querySelector(".btn-plus")
const value = document.querySelector(".value")
let num = 0

btnPlus.addEventListener("click", numPlus)
btnMinus.addEventListener("click", numMinus)

function numPlus() {
    num++
    value.textContent = num
    value.classList.add("is-plus")
    value.classList.remove("is-minus")
}

function numMinus() {
    num--
    value.textContent = num
    value.classList.add("is-minus")
    value.classList.remove("is-plus")
}

const menu = document.querySelector(".box")
const btn = document.querySelector(".show-box")

btn.addEventListener("click", menuShow)

function menuShow() {
    menu.classList.toggle("is-show")
}
