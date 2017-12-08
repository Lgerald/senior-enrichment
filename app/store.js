import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))


export * from './reducers/campus'
export * from './reducers/students'
export * from './reducers/newStudent'
export * from './reducers/newCampus'
export * from './reducers/editCampus'
export * from './reducers/editStudents'