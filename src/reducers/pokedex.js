const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

const initialState = {
    pokemons: [{ id: 1, name: 'bulbausur'}],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_POKEMONS':
            const pokemons = action.payload.map(({ url, name }) => ({
                id: url.replace(apiUrl, '').replace('/', ''),
                name
            }));
            return {
                pokemons
            };
        default:
            return state;
    }
};