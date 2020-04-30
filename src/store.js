import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import reduxSaga from 'redux-saga';
import rootSaga from './sagas'
import reducer from './reducers'



const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
  applyMiddleware(sagaMiddleware)),
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store