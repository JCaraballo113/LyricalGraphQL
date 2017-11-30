import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// CSS
require('./style/style.css');

// Components
import App from './components/App';
import SongsList from './components/SongsList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SongsList} />
        <Route path="songs/new" component={SongCreate} />
      </Route>
    </Router>
  </ApolloProvider>,
  document.querySelector('#root')
);
