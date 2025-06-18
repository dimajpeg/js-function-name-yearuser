const formYear = document.getElementById("form-year")
const yearInput = document.getElementById("year-input")
const formName = document.getElementById("form-name")
const userInput = document.getElementById("user-input")

formYear.addEventListener('submit', function (event) {
  event.preventDefault()
  const userYear = 2025 - yearInput.value
  console.log("Ваш вік: " + userYear)
})

formName.addEventListener("submit", function (event) {
  event.preventDefault()
  const userName = userInput.value
  console.log("Ваше імя " + userName)
})



// let name = "Dima"
// let lastName = "Matuschenko"
// let fullName = name + " " + lastName
// const age = 20
// // let 7isMarried = false
// // let .adress = "Ukraine"
// // let let = "Dima"
// // let is married = false
// // const =7
// console.log(fullName, age)
// /*
// ну вот пишу тут обьясняю
// как работает мой код 
// */

// let filmActor = "Vinston" // camelCase
// let FullTime = 24 //PascalCase
// let full_name = "frank-richard" 