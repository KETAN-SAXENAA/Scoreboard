
let Home1 = document.getElementById("Home")
let Home2 = document.getElementById("Home")
let Home3 = document.getElementById("Home")

let Guest1 = document.getElementById("Guest")
let Guest2 = document.getElementById("Guest")
let Guest3 = document.getElementById("Guest")


let count = 0

function INCREMENTONE() {
    count += 1
    Home1.textContent = count
}

function INCREMENTTWO() {
    count += 2
    Home2.textContent = count
}

function INCREMENTTHREE() {
    count += 3
    Home3.textContent = count
}

let increase = 0

function INCREASEONE() {
    increase += 1
    Guest1.textContent = increase
}

function INCREASETWO() {
    increase += 2
    Guest2.textContent = increase
    console.log(count)
}

function INCREASETHREE() {
    increase += 3
    Guest3.textContent = increase

}