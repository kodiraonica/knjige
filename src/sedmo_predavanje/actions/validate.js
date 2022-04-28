export const FORM_VALIDATION = "FORM_VALIDATION";

export const validateFormControl = (name, formControl) => {
  let validated;
  if (formControl.value) {
    switch (name) {
      case "name":
        validated = validateName(formControl.value);
        break;
      case "email":
        validated = validateEmail(formControl.value);
        break;
      case "password":
        validated = validatePassword(formControl.value);
        break;
      case "ISBN":
        validated = validateISBN(formControl.value);
        break;
      case "genre":
      case "availability":
        validated = validateEmpty(formControl.value, name);
        break;
      default:
        return;
    }
  } else {
    validated = validateEmpty(formControl.value, name);
  }
  return {
    type: FORM_VALIDATION,
    formControl: { name: name, validated: validated },
  };
};

const validateISBN = (ISBN) => {
  return ISBN.match(
    /^(?:ISBN(?:-13)?:?\ )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$/
  );
};

const validateEmpty = (value = null, key) => {
  return {
    value: value,
    valid: false,
    error: fieldErrors[key].required,
  };
};
const validateName = (name) => {
  if (name.length >= 3) {
    let res = { value: name, valid: true, error: "" };
    return res;
  } else {
    return {
      value: name,
      valid: false,
      error: fieldErrors.name.short,
    };
  }
};

const validateEmail = (email) => {
  let matched = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (matched) {
    return { value: email, valid: true, error: "" };
  } else {
    return {
      value: email,
      valid: false,
      error: fieldErrors.email.notValid,
    };
  }
};

const validatePassword = (password) => {
  let matched = password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/);
  if (matched) {
    return { value: password, valid: true, error: "" };
  } else {
    return {
      value: password,
      valid: false,
      error: fieldErrors.password.special,
    };
  }
};

const fieldErrors = {
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
    special: "Password must contain minimum four letters and a number.",
  },
  ISBN: {
    required: "ISBN is required",
    special: "ISBN must be beteween 10 and 13 characters.",
  },
  genre: {
    required: "Genre is required",
  },
  availability: {
    required: "Active is required",
  },
};
