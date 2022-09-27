const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const h4 = document.querySelector("h4");
const a = document.querySelectorAll("a")

btn.addEventListener('click', () => {
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    h4.style.color = hexColor;
    a[0].style.color = hexColor
    a[1].style.color = hexColor

})


const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}