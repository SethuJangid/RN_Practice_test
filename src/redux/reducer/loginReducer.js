import { LOGIN_USER } from "../action/action";


const initialState = {
  login: ''
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return state.login = action.payload
    }
    default:
      return state;
  }
}

export default loginReducer;