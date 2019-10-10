import { applyMiddleware, combineReducers,createStore } from "redux";
import { rootReducer } from "./Reducers";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "../FakeRequestsSaga/Saga";




const sagaMiddleware = createSagaMiddleware();
export const store = createStore(combineReducers(rootReducer),applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);


