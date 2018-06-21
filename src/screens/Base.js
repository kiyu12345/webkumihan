import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import TopScreenMap from './TopScreenMap.js';
import rootReducer from '../reducers/rootReducer.js';

import rootSaga from '../sagas/rootSaga.js';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, createLogger()));
sagaMiddleware.run(rootSaga);

export default class Base extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <TopScreenMap />
            </Provider>
        );
    }
}
