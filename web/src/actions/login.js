import { callApi } from '../common/services/baseServices';
import { host } from '../environment';

const ACTIONS = {
  GET_JSON: 'GET_JSON',
  SHOW_LOADING: 'SHOW_LOADING',
  LOGIN_PROGRESS: 'LOGIN_PROGRESS',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
};

const updateStatus = (type, data) => ({
  type,
  data,
});

const login = (data) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      'X-CSRF-TOKEN': '',
    },
    body: JSON.stringify({
      grant_type: 'password',
      client_id: '2',
      client_secret: 'r1FcHzRdcNriP5lYxNSu2iiV9l1B9e4zOQASG9ub',
      username: data.email, // test-account+1@i3design.co.jp
      password: data.password, // password1
      refresh_token: '',
    }),
  };
  return (dispatch) => {
    updateStatus(ACTIONS.LOGIN_PROGRESS, true);
    callApi(`${host.serverTest}oauth/token`, config,
      (res) => {
        dispatch(updateStatus(ACTIONS.LOGIN_SUCCESS, res));
      },
      (err) => {
        dispatch(updateStatus(ACTIONS.LOGIN_ERROR, err));
      });
  };
};

export { login, ACTIONS };
