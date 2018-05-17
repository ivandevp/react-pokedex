import pokeapi from '../api';

export const getPokemons = (offset = null) => 
    dispatch => {
        pokeapi.get(offset)
            .then(pokemons => dispatch({
                type: 'LIST_POKEMONS',
                payload: {
                    pokemons: pokemons.results
                }
            }))
            .catch((error) => console.log(error));
    };