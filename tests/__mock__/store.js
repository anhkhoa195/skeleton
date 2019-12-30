import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import { Map } from 'immutable';
import { User } from 'models';

const middlewares = [ thunk, reduxPromise ];
const mockStore = configureStore(middlewares);
const history = createMemoryHistory();

// Initialize mockstore
const initialState = {
    App: Map({
        isProcessing: false,
        user: new User({})
    }),
    router: {
        action: 'POP',
        location: history.location
    }
};
const store = mockStore(initialState);

export default store;
