import React, { useState, useEffect } from "react";
import Button from "shared/Button/Button";
import "sedmo_predavanje/Form/Form.scss";
import FormControl from "sedmo_predavanje/Form/FormControl/FormControl";
import { handleFormSubmit } from "sedmo_predavanje/actions/form";
import { useStore } from "sedmo_predavanje/store/Store";

export default function Form(props) {
  const formName = props.formName;
  const formFields = props.formFields;
  const [globalState, dispatch] = useStore();
  const [form, setForm] = useState(globalState[formName]);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    console.log(globalState);
    setValid(isformValid(globalState[formName]));
    setForm(globalState[formName]);
  }, [globalState, setValid, formName]);

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
