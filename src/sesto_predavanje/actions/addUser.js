export const ADD_USER = "ADD_USER";
export const INPUT_CHANGE = "INPUT_CHANGE";

export const addUser = (data) => {
  return { type: ADD_USER, user: data };
};

export const handleUserFormControl = (name, value) => {
  return { type: INPUT_CHANGE, input: { name: name, value: value } };
};
