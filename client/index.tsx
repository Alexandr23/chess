import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { App } from './components/App';

import './styles/main.scss';

const AppWrapped = process.env.NODE_ENV === 'development' ? hot(App) : App;

ReactDOM.render(<AppWrapped />, document.getElementById('app'));
