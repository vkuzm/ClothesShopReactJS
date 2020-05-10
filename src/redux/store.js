import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const isDevelopment = process.env.NODE_ENV === 'development';
const middleware = [];

if (isDevelopment) {
  middleware.push(logger);
}

const composeEnhancers =
  isDevelopment && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(rootReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };
