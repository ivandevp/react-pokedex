const initialState = {
    pokemons: [{ id: 1, name: 'bulbausur'}],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_POKEMONS':
            return action.payload;
        default:
            return state;
    }
};