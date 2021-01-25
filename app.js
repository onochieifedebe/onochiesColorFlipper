const colors = ["green", "red", "tomato", "gold", "blue", "yellow", "purple", "indigo", "black", "white", "pink"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random()*colors.length);
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent= colors[randomNumber];
    color.style.color = colors[randomNumber];
})
