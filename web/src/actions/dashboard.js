import { callApi } from '../common/services/baseServices';
import { host } from '../environment';
import { getCookie } from '../common/enum';

const ACTIONS = {
  GET_ITEM_SUCCESS: 'GET_ITEM_SUCCESS',
  GET_ITEM_ERROR: 'GET_ITEM_ERROR',
};

const updateStatus = (type, data) => ({
  type,
  data,
});

const getItemDashboard = () => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN') || getCookie('ACCESS_TOKEN')}`,
    },
  };
  return (dispatch) => {
    callApi(`${host.serverTest}api/dashboards`, config,
      (data) => {
        console.log({ data });
        dispatch(updateStatus(ACTIONS.GET_ITEM_SUCCESS, data));
      },
      (err) => {
        // console.log({ err });
        dispatch(updateStatus(ACTIONS.GET_ITEM_ERROR, err));
      });
  };
};

export { ACTIONS, getItemDashboard };
