import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DEFAULT_GRAPHQL_URI } from './consts';

const QUERY_DEFAULT_OPTIONS = {
  fetchPolicy: 'cache-and-network',
  errorPolicy: 'all',
}

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URI || DEFAULT_GRAPHQL_URI,
  cache: new InMemoryCache({
    typePolicies: {
      Page: {
        // TODO Check if nested keys work (probably not)
        keyArgs: ['pageInfo.page', 'pageInfo.perPage', 'media.search'],
        merge: true,
      },
    },
  }),
});

// https://github.com/apollographql/apollo-client/issues/2555#issuecomment-648280766:
client.defaultOptions = {
  // https://github.com/apollographql/apollo-client/issues/2555#issuecomment-490866804:
  watchQuery: QUERY_DEFAULT_OPTIONS,
  query: QUERY_DEFAULT_OPTIONS,
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
