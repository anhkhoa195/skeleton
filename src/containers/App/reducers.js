import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { Map } from 'immutable';
import { ACTIONS } from './actions';

const initialState = Map({
    isProcessing: false,
    user: null,
    error: null
});

const App = (state = initialState, { type, payload }) => {
    switch (type) {
    case ACTIONS.LOADING: return state.merge({ isProcessing: true, ...payload });
    case ACTIONS.LOADED: return state.merge({ isProcessing: false, ...payload });

    case ACTIONS.GET_AUTHENTICATION_START: return state.merge({ error: initialState.get('error') });
    case ACTIONS.GET_AUTHENTICATION_SUCCESS: {
        const { user } = payload;
        return state.merge({ user });
    }
    case ACTIONS.GET_AUTHENTICATION_ERROR: return state.merge(payload);

    default: return state;
    }
};

export default history => combineReducers({
    App,
    router: connectRouter(history)
});
