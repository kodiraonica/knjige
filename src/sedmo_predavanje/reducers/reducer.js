import { ADD_USER, INPUT_CHANGE } from "sedmo_predavanje/actions/form";
import { FORM_VALIDATION } from "sedmo_predavanje/actions/validate";

const formControlDefaults = { value: "", valid: null, error: "" };
export const initialState = {
  users: [],
  userForm: {
    control: {
      name: formControlDefaults,
      email: formControlDefaults,
      password: formControlDefaults,
    },
  },
  bookForm: {
    control: {
      name: formControlDefaults,
      ISBN: formControlDefaults,
      genre: formControlDefaults,
      availability: formControlDefaults,
    },
  },
};

export const stateReducer = (state = initialState, action) => {
  let form;
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.user),
      };
    case INPUT_CHANGE:
      let [name, value] = [action.formControl.name, action.formControl.current];
      form = state.userForm;
      form.control[name] = value;
      return {
        ...state,
        userForm: form,
      };
    case FORM_VALIDATION:
      let [ctrl, formControl] = [
        action.formControl.name,
        action.formControl.validated,
      ];
      form = state.userForm;
      form.control[ctrl] = formControl;
      return {
        ...state,
        userForm: form,
      };
    default:
      return initialState;
  }
};
