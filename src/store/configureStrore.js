import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const configureStore = (preloadedState) => {
  const middlewares = [thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const storeEnhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...storeEnhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  return store
}

export default configureStore
