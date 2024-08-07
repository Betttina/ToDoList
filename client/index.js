/*
import React from 'react';
import App from './App';
/!*import './index.scss'; // Importera global SCSS fil*!/
import { createRoot } from "react-dom/client";


// get rot-elem
const rootElement = document.getElementById("root");

// create a root
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
*/


import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    return <h1>Hello, World!</h1>;
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


