import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { createRoot } from 'react-dom/client';
import config from './src/config';
import { persistState } from './src/utils';
import './index.css';
import App from './src/App';

store.subscribe(() => persistState(store.getState().watchlistSlice, config.WATCHLIST_KEY))

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Provider store={store}><App tab="home" /></Provider>);