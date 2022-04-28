import React, { useState, useEffect } from "react";
import Button from "../../shared/Button/Button";
import "./UserForm.scss";
import {
  defaultErrors,
  fieldErrors,
  isValid,
  validateUserForm,
  noValidation,
} from "./misc/validation";
import FormControl from "./FormControl/FormControl";

export default function Form() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(defaultErrors);
  const [valid, setValid] = useState(noValidation);

  const handleChange = (event) => {
    debugger;
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
    handleErrors();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleErrors();
    if (valid) {
      console.log("Korisnik je uspješno unešen!");
      console.log(type, name, email, password);
    } else {
      console.log("Korisnik nije unešen! Provjerite upisane podatke.");
      console.log(type, name, email, password);
    }
  };

  const handleErrors = () => {
    let user = {
      name: name,
      email: email,
      password: password,
    };
    let err = validateUserForm(user);
    let validated = isValid(err);
    setValid({ ...validated });
    setErrors({ ...err });
  };

  return (
    <div className="UserForm">
      <form onSubmit={handleSubmit}>
        <FormControl
          type="text"
          name="name"
          value={name}
          valid={valid.name}
          errors={errors.name}
          onChange={handleChange}
        />
        <FormControl
          type="text"
          name="email"
          value={email}
          valid={valid.email}
          errors={errors.email}
          onChange={handleChange}
        />
        <FormControl
          type="password"
          name="password"
          value={password}
          valid={valid.password}
          errors={errors.password}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
