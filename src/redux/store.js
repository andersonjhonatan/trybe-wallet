import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancer = compose(
  applyMiddleware(thunk),
  composeWithDevTools(),
);

const store = createStore(rootReducer, enhancer);

if (window.Cypress) {
  window.store = store;
}

export default store;
