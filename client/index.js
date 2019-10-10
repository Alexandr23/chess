import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader/root';
import Root from "./components/App/index.jsx";

import './styles/main.scss';

const App = hot(Root);

ReactDOM.render(<App />, document.getElementById("app"));
