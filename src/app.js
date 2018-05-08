import React from 'react';
import ReactDOM from 'react-dom';

import 'babel-polyfill';

import Base from './screens/Base.js';

// 'react-tap-event-plugin'をインストールした場合、以下のコメントを外す
//import injectTapEventPlugin from 'react-tap-event-plugin';
//injectTapEventPlugin();

export default class App extends React.Component {
    render() {
        return (
            <Base />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
