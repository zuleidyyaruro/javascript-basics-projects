
const btnDecrease = document.querySelector(".decrease");
const btnIncrease = document.querySelector(".increase");
const btnReset = document.querySelector(".reset");
const value = document.querySelector("#value");

let count = 0;
value.textContent = count;

btnDecrease.addEventListener('click', () => {
    count += 1;
    value.textContent = count;
})

btnIncrease.addEventListener('click', () => {
    count -= 1;
    value.textContent = count;
})


btnReset.addEventListener('click', () => {
    count = 0;
    value.textContent = count;
})