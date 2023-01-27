// Event handler
function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

// Create elements
let randomBgBtn = document.createElement('button');
randomBgBtn.id = 'random-bg-btn';
randomBgBtn.innerHTML = 'Random Background Color';

let colorDisplay = document.createElement('p');

// Append button
document.body.querySelector('main').appendChild(randomBgBtn);

// Event listener
randomBgBtn.addEventListener('click', () => {
    color = randomColor();
    colorDisplay.innerHTML = color;
    document.body.style.backgroundColor = color;
    document.body.querySelector('main').appendChild(colorDisplay);
});