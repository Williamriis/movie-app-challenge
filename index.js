import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './src/App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Provider store={store}><App tab="home" /></Provider>);