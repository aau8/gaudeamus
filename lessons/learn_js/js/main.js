// string - строка
// ["Apple", "Apple", `Apple`]

// number - число
// 0, 3223, 2e222, 3.5

// boolean - логический
// true, false

// undefined - неопределено
// "undefined", undefined

// null - ничего (пустое значение)

// object -
// {}

// bigInt - большое число
// symbol - уникальный символ

// typeof - метод для определения типа данных

// ===============================================

// Переменные:
// const, let, var

// Виды переменных:
// appleGreen - camel case
// apple_green - snake case
// apple-green - kebab case

// Способы нахождения элементов на странице
// 1. querySelector
// 2. querySelectorAll
// 3. getElementById
// 4. getElementsByClassName

// let box = document.querySelector(".box1")
// let box = document.getElementById("about")
// let box = document.getElementsByClassName("box")
// let boxes = document.querySelectorAll(".box")

// console.log("boxes", boxes)

// let names = ["Artem", "Nikita", "Egor"];

// console.log(box[1])
// console.log(names[2])

// console.log(box)

// Инкремент, например i++
// Декремент, например i--

// Циклы
// while, for

// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].style.width = "200px";
//     boxes[i].style.height = "200px";
//     boxes[i].style.backgroundColor = "green";
//     boxes[i].style.border = "4px solid #000";
// }

// let i = 100;
// while (i > 50) {
//     console.log(i);
//     i = i - 15;
// }

// if ... else

// if (boxes.length < 3) {
//     console.log("В этом массиве меньше 3 элементов")
// } else if (boxes.length == 5) {
//     console.log("В этом массиве 5 элементов")
// } else {
//     console.log("В этом массиве больше 3 элементов")
// }

// >, <, >=, <=, ==, ===, !=, !==

// Функция
// function sayMyName(name) {
//     console.log("My name is " + name)
// }

// sayMyName("Artem")
// sayMyName("Nikita")
// sayMyName("Egor")

// const btnMinus = document.querySelector("#minus")
// const btnPlus = document.querySelector("#plus")
// let count = 0

// btnPlus.addEventListener("click", () => {
//     count++
//     console.log(count)
// })

// btnMinus.addEventListener("click", () => {
//     count--
//     console.log(count)
// })

const box = document.querySelector(".box")
const btn = document.querySelector(".change-box")

btn.addEventListener("click", () => {
    // box.classList.remove("is-active")
    // box.classList.add("is-active")
    box.classList.contains("is-active")

    // console.log(box.classList.contains("is-active"))

    if (box.classList.contains("is-active")) {
        box.classList.remove("is-active")
    } else {
        box.classList.add("is-active")
    }
})
