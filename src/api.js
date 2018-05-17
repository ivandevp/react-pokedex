const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

const getPokemons = (offset) => 
    fetch(`${apiUrl}/${offset || ''}`).then(response => response.json());

export default {
    get: getPokemons,
};