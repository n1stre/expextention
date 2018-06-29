import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createElement, replaceBodyContent, copyContentsOf } from './helpers/document';

const App = ({ route }) => (
  <Provider store = { store } >
    <Router routes = { routes(route) } />
  </Provider>
)

createElement('div', { id: "app" })
  .then(copyContentsOf(document.body))
  .then(replaceBodyContent);