import {
  combineReducers,
} from 'redux';
import login from './login';
import dashboard from './dashboard';

const rootReducer = combineReducers({
  login, dashboard
});

export default rootReducer;
