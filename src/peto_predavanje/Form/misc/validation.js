export const defaultErrors = {
  name: "",
  email: "",
  password: "",
};
export const fieldErrors = {
  name: {
    required: "Name is required",
    short: "Name must be at least 3 characters in length.",
  },
  email: {
    required: "Email is required",
    notValid: "Please enter a valid email address",
  },
  password: {
    required: "Password is required",
    special: "Password must contain one number and a special character.",
  },
};
export const noValidation = {
  name: null,
  email: null,
  password: null,
};

export const isValid = (errors) => {
  let validate = {};

  Object.keys(errors).forEach((er) => {
    validate[er] = errors[er] ? false : true;
  });

  return validate;
};

export const validateUserForm = (user) => {
  let invalid = defaultErrors;

  if (!user.name) {
    invalid.name = fieldErrors.name.required;
  } else if (user.name.length < 3) {
    invalid.name = fieldErrors.name.short;
  } else {
    invalid.name = "";
  }

  if (!user.email) {
    invalid.email = fieldErrors.email.required;
  } else if (!validateEmail(user.email)) {
    invalid.email = fieldErrors.email.notValid;
  } else {
    invalid.email = "";
  }

  if (!user.password) {
    invalid.password = fieldErrors.password.required;
  } else if (!validatePassword(user.password)) {
    invalid.password = fieldErrors.password.special;
  } else {
    invalid.password = "";
  }

  return invalid;
};

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validatePassword = (password) => {
  return password.match(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/);
};
