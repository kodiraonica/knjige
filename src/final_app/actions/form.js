export const ADD_USER = "ADD_USER";
export const ADD_BOOK = "ADD_BOOK";
export const INPUT_CHANGE = "INPUT_CHANGE";

export const handleFormSubmit = (name, data) => {
  switch (name) {
    case "userForm":
      addUser(data);
      break;
    case "bookForm":
      addBook(data);
      break;
    default:
      break;
  }
};
const addUser = (data) => {
  let user = {
    name: data.name.value,
    email: data.email.value,
    password: data.password.value,
  };
  return { type: ADD_USER, user: user };
};

const addBook = (data) => {
  let book = {
    name: data.name.value,
    ISBN: data.ISBN.value,
    genre: data.genre.value,
    availability: data.availability.value,
  };
  return { type: ADD_BOOK, book: book };
};

export const handleFormControl = (name, value, valid, error) => {
  let formControl = {
    name: name,
    current: { value: value, valid: valid, error: error },
  };
  return { type: INPUT_CHANGE, formControl: formControl };
};
