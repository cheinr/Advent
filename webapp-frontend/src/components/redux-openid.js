import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createStore, Provider } from 'react-redux';
import createOidcMiddleware, { createUserManager, OidcProvider, reducer } from 'redux-oidc';

// user manager configuration object
//TODO - change values here
const config = {
  client_id: 'my-client',
  redirect_uri: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/callback`,
  response_type: 'id_token token',
  scope: 'openid profile',
  authority: 'http://myIdentityProvider.com',
  post_logout_redirect_uri: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/login`,
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/silent_renew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true
}

//create a user manager instance
const userManager = createUserManager(config);

// create the middleware - whatever that is...
// '/callback' probably needs to be changed.
const oidcMiddleware = createOidcMiddleware(userManager, () => true, false, '/callback');

//configure reducers - some redux thing
const reducers = combineReducers({
  oidc: reducer,
  //other reducers
});

//configure redux store
const store = createStore(
  reducers,
  applyMiddleware(oidcMiddleware);
);

// register the OidcProvider nested below react-redux's Provider
ReactDOM.render((
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <MyApp />
    </OidcProvider>
  </Provider>
), document.getElementById('app'));
