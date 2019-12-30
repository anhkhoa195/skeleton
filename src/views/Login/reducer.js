import { Map } from 'immutable';
import { ACTIONS } from './actions';

const initialState = Map({
    user: null,
    error: null
});

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case ACTIONS.RESET_STATE:
        return state.merge(initialState);

    case ACTIONS.LOGIN_REQUEST:
        return state.merge({ error: initialState.get('error') });
    case ACTIONS.LOGIN_SUCCESS:
        const { user } = payload;
        return state.merge(user);
    case ACTIONS.LOGIN_ERROR:
        const { error } = payload;
        return state.merge(error);

    default:
        return state;
    }
};

export default reducer;
