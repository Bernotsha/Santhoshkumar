import React from 'react';
import { render } from 'react-dom';
import App from './App';

console.log('ENV',process.env.NODE_ENV);
console.log('BASE_URI', process.env.BASE_URI);
render(<App />,document.getElementById('app'));
