const container = document.getElementById('container');

const colors = ['#D8E2DC','#FFE5D9','#FFCAD4','#F4ACB7','#9D8189']

// const SQUARES = prompt('Please Enter the Amount of Squares you would like in the grid...');

const SQUARES = 500;

for (let i = 0; i <SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => addColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

function addColor(element) {
    const color = randomColor()
    element.style.backgroundColor = randomColor();
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;


};

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000';
};

function randomColor() {
    return colors[Math.floor(Math.random()*colors.length)];
}


