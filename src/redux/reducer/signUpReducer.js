import { ADD_USER } from "../action/action";


const initialState = {
  signUp: []
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const { id, user } = action.payload
      return {
        ...state,
        data: [ ...state.signUp, { id, user }]
      };
    }
    default:
      return state;
  }
}

export default signUpReducer;