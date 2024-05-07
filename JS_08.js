//1. Arreglar Pokemon en localStorage
//2. Manipular DOM y agregar una tarjeta del pokemon
//3. El tamaño y la información de la tarjeta es a consideración personal. Al menos mostrar el nombre, id y peso del pokemon. Puntos extra si se muestra una imagen.
//4. La tarjeta debe cargarse en pantalla aún si se cierra la ventana del navegador.
//5.Para obtener la información recuerda localStorage y nuestro método asíncrono de Fetch



const URL_BASE = 'https://pokeapi.co/api/v2/';

// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/
// fetch async

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${URL_BASE}pokemon/${pokemon}/`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

//*
 Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('pokeId', pokemon.id);
        localStorage.setItem('name', pokemon.name);
        localStorage.setItem('weight', pokemon.weight);
        localStorage.setItem('height', pokemon.height);
        localStorage.setItem('type', pokemon.types);
        console.log(pokemon.name);
        console.log(pokemon.id);
        console.log(pokemon.weight);
        console.log(pokemon.height);
        console.log(pokemon.types);
        createCard(pokemon);
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('pokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);
    console.log(pokemon.id);
    console.log(pokemon.weight);
    console.log(pokemon.height);
    console.log(pokemon.types);
    createCard(pokemon);
})


//* Pokemon anterior

document.getElementById('previous-btn')
    .addEventListener('click', async () => {
        const actualPokeId = parseInt(localStorage.getItem('actualPokeId'));
        const newId = Math.max(1, actualPokeId -1);
        const pokemon = await fetchPokemon(newId);
        localStorage.setItem('actualPokeId', newId);
        console.log(pokemon.name);
        console.log(pokemon.id);
        console.log(pokemon.weight);
        console.log(pokemon.height);
        console.log(pokemon.types);
    })

//* Pokemon siguiente

document.getElementById('next-btn')
    .addEventListener('click', async () => {
        const actualPokeId = parseInt(localStorage.getItem('actualPokeId'));
        const newId = actualPokeId + 1;
        const pokemon = await fetchPokemon(newId);
        localStorage.setItem('actualPokeId', newId);
        console.log(pokemon.name);
        console.log(pokemon.id);
        console.log(pokemon.weight);
        console.log(pokemon.height);
        console.log(pokemon.types);
        console.log(pokemon.sprite);
    })

//*Pokemon Card

const createCard = (pokemon) => {
    const cardContainer = document.getElementById('card-container');
    const card = document.createElement('div');
    const png = document.createElement('png');
    const name = document.createElement('p');
    const id = document.createElement('p');
    const weight = document.createElement('p');
    const height = document.createElement('p');
    const types = document.createElement('p');
}


// fetch('https://jsonplaceholder.typicode.com/posts', {
//    method: 'POST',
//    body: JSON.stringify({
//       title: 'title1',
//        body: 'Lorem ipsum dolor sit amet',
//        userId: 1,
//    }),
//    headers: {
//        'Content-type': 'application/json; charset=UTF-8',
//    }
//}).then(res => res.json())
//    .then(json => console.log(json))