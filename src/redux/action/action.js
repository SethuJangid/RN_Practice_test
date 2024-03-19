export const ADD_USER = "ADD_USER";
export const LOGIN_USER = "LOGIN_USER";

let userId = 0;

export const addUser = user => ({
  type: ADD_USER,
  payload: {
    id: ++userId,
    user
  }
});

export const loginUser = user => ({
  type: LOGIN_USER,
  payload: user
});