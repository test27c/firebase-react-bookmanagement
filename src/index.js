import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store'
import {addBook, getBooks} from './actions/books'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

const store = getAppStore();

const template = (<Provider store={store}><AppRouter /></Provider>)

store.dispatch(getBooks()).then(() => { 
  ReactDOM.render(template, document.getElementById('root'));
});