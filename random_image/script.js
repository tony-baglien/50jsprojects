const URL = 'https://source.unsplash.com/random/'
const conatiner = document.querySelector('.container');

const rows = 10;

for (let i = 0; i < rows*3; i++) {
        const randImg = document.createElement('img');
        randImg.src = `${URL}${getRandomSize()}`
        conatiner.appendChild(randImg);

    }

function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300;
}
