const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke()

async function generateJoke() {

    const config = {
        headers: {
            Accept: 'application/JSON'
        }}

    const res = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();

    jokeEl.innerHTML = data.joke;

} 

// function generateJoke() {

//     const config = {
//         headers: {
//             Accept: 'application/JSON'
//         }}

//     fetch('https://icanhazdadjoke.com', config).
//     then(res => res.json()).
//     then(data => {
//         jokeEl.innerHTML = data.joke
//     })
// } 