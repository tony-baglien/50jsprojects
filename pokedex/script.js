const pokeContainer = document.getElementById('poke-container');
const poke_count = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const mainTypes = Object.keys(colors);
console.log(mainTypes);

const fetchPokemons = async() => {
    for (let i = 1; i <= poke_count; i++) {
        await getPokemon(i);
}
}

const getPokemon = async(id) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(URL);
    const data = await res.json()
    createCards(data);
}
fetchPokemons();

function createCards(data) {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = data.name[0].toUpperCase() + data.name.slice(1);
    const id = data.id.toString().padStart(3, '0')

    const type = data.types.map(type => type.type.name);
    const findTypes = mainTypes.find(t => type.indexOf(t) > -1);

    const color = colors[findTypes];

    pokemonEl.style.backgroundColor = color;

    pokemonEl.innerHTML = `
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${data.id}.png" alt="${data.name}">
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class='name'>${name}</h3>
            <small class="type">Type:<span> ${findTypes[0].toUpperCase() + findTypes.slice(1)}</span></small>
        </div>
        `
    pokeContainer.appendChild(pokemonEl);

    
}