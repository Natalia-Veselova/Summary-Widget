const initialState = {
    data: {
        utterances: [],
        words: [],
        word_frequencies: {},
        summary: {}
    },
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_DATA_SUCCESS':
            return { ...state, data: action.payload, error: null };
        case 'LOAD_DATA_ERROR':
            return { ...state, data: {}, error: action.payload };
        default:
            return state;
    }
};

export { initialState, reducer };
