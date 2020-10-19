import { ACTIONS } from '../actions/dashboard';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.GET_ITEM_SUCCESS:
      return {
        ...state,
        status: action.type,
        response: action.data.data,
      };
    case ACTIONS.GET_ITEM_ERROR:
      return {
        ...state,
        status: action.type,
        response: action.err,
      }
    default:
      return state;
  }
};
