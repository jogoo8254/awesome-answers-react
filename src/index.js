import React from 'react';
import ReactDOM from 'react-dom';
// to use css files in a create-react-app based project,
// import the file as you would a JS file.
// a tool called webpack will take CSS make it appear as a 
// <style /> tag in any page where this JS is used.
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Server } from 'net';
import { App } from "./components/App"
// A React component is a function that returns a React element.
// React elements are created with the `React.createElement()` method or JSX tags
import { initializeIcons } from '@uifabric/icons';
initializeIcons();
ReactDOM.render(<App />,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
