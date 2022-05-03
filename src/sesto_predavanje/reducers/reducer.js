import { ADD_USER, INPUT_CHANGE } from "sesto_predavanje/actions/addUser";

export const initialState = {
  users: [],
  userForm: {
    name: "",
    email: "",
    password: "",
  },
};

export const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.user),
      };
    case INPUT_CHANGE:
      let [name, value] = [action.input.name, action.input.value];
      let form = state.userForm;
      form[name] = value;
      return {
        ...state,
        userForm: form,
      };
    default:
      return initialState;
  }
};
