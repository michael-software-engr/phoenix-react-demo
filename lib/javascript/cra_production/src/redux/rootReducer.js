import { combineReducers } from 'redux';

import todoDemoReducer from './modules/todoDemo/reducers/index';

const rootReducer = combineReducers({
  todoDemo: todoDemoReducer
});

export default rootReducer;
