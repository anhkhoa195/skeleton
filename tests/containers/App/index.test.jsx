import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'containers';
import store from '../../__mock__/store';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={ store }/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
