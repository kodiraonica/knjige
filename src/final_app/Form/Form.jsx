import React, { useState, useEffect } from "react";
import Button from "shared/Button/Button";
import "final_app/Form/Form.scss";
import FormControl from "final_app/Form/FormControl/FormControl";
import { handleFormSubmit } from "final_app/actions/form";
import { useStore } from "final_app/store/Store";

export default function Form(props) {
  const edit = props.edit || null;
  const formName = props.formName;
  const formFields = props.formFields;
  const [globalState, dispatch] = useStore();
  const [form, setForm] = useState(globalState[formName]);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    console.log(globalState);
    setValid(isformValid(globalState[formName]));
    setForm(globalState[formName]);

    if (edit) {
      populateForm(globalState.user[edit]);
    }
  }, [globalState, setValid, formName, edit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    // dispatch funkcija koja povezuje Context i akcije
    dispatch(handleFormSubmit(formName, form.control));
  };

  const isformValid = (form) => {
    for (const ctrl in form.control) {
      if (!form.control[ctrl].valid) return false;
    }
    return true;
  };

  const populateForm = (data) => {
    let formData;
    if (formName === "userForm") {
      formData = {
        control: {
          name: { value: data.name, valid: null, error: "" },
          email: { value: data.email, valid: null, error: "" },
          password: { value: data.password, valid: null, error: "" },
        },
      };
    } else if (formName === "bookForm") {
      formData = {
        control: {
          name: { value: data.name, valid: null, error: "" },
          ISBN: { value: data.ISBN, valid: null, error: "" },
          genre: { value: data.genre, valid: null, error: "" },
          availability: { value: data.availability, valid: null, error: "" },
        },
      };
    }

    setForm({ ...form, userForm: formData });
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => {
          return (
            <FormControl
              key={index}
              type={field.type}
              name={field.name}
              formName={formName}
              value={form.control[field.name].value}
              options={field.options}
            />
          );
        })}

        <Button type="submit" disabled={!valid}>
          Submit
        </Button>
      </form>
    </div>
  );
}
