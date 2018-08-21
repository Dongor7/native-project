import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import RootRouter from './Routers/RootRouter';

const initialState = {};
const store = createStore(reducers, initialState);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <RootRouter/>
            </Provider>
        )
    }

}