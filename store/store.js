import { createStore } from 'redux';

const initialState = {
    movies: [],
    shows: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MOVIES":
            return {
                ...state,
                movies: action.payload
            }
        case "ADD_SHOWS":
            return {
                ...state,
                shows: action.payload
            }
        default:
            return state;
    }
}

const store = (initialState) => {
    return createStore(reducer, initialState);
};

export default store;