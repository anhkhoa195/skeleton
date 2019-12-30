import { Map } from 'immutable';

const initialState = Map({
    data: null,
    error: null
});

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

    default: return state;
    }
};

export default reducer;
