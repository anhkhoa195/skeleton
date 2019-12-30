import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { MainLayout } from 'containers';
import { history } from './stores';

const App = ({ store }) => {
    return (
        <Provider store={ store }>
            <ConnectedRouter history={ history }>
                <MainLayout />
            </ConnectedRouter>
        </Provider>
    );
};

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
