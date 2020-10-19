import { ACTIONS } from '../actions/login';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_PROGRESS:
      return {
        ...state,
        type: action.type,
      };
    case ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        status: action.type,
        response: action.data,
      };
    case ACTIONS.LOGIN_ERROR:
      return {
        ...state,
        status: action.type,
        response: action.err,
      };
    default:
      return state;
  }
};
