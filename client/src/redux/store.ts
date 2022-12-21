import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import loginReducer from './reducer/loginSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
