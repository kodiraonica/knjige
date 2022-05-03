import React, { useState, useEffect } from "react";
import Button from "shared/Button/Button";
import "sesto_predavanje/Form/UserForm.scss";
import {
  defaultErrors,
  isValid,
  validateUserForm,
  noValidation,
} from "./validation/validation";
import FormControl from "./FormControl/FormControl";
import { addUser } from "../actions/addUser";
import { useStore } from "../store/Store";

export default function Form() {
  const [globalState, dispatch] = useStore();
  const [errors, setErrors] = useState(defaultErrors);
  const [valid, setValid] = useState(noValidation);
  const [form, setForm] = useState(globalState.userForm);

  useEffect(() => {
    console.log(globalState);
    setForm(globalState.userForm);
  }, [globalState]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleErrors();
    if (valid) {
      console.log("Korisnik je ispravno unešen!");
      console.log(form);
      // dispatch funkcija koja povezuje Context i akcije
      dispatch(addUser(form));
    } else {
      console.log("Korisnik nije unešen! Provjerite upisane podatke.");
      console.log(form);
    }
  };

  const handleErrors = () => {
    let err = validateUserForm(form);
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
          value={form.name}
          valid={valid.name}
          errors={errors.name}
        />
        <FormControl
          type="text"
          name="email"
          value={form.email}
          valid={valid.email}
          errors={errors.email}
        />
        <FormControl
          type="password"
          name="password"
          value={form.password}
          valid={valid.password}
          errors={errors.password}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
