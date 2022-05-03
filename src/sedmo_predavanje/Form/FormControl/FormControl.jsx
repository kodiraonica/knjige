import { useState, useEffect } from "react";
import "sedmo_predavanje/Form/FormControl/FormControl.scss";
import { useStore } from "sedmo_predavanje/store/Store";
import { handleFormControl } from "sedmo_predavanje/actions/form";
import { validateFormControl } from "sedmo_predavanje/actions/validate";

export default function FormControl(props) {
  const [globalState, dispatch] = useStore();
  const formName = props.formName;
  const type = props.type;
  const name = props.name;
  const options = props.options;
  const [value, setValue] = useState(props.value);
  const [valid, setValid] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setValid(globalState[formName].control[name].valid);
    setError(globalState[formName].control[name].error);
  }, [globalState, name, formName]);

  const handleChange = (event) => {
    event.preventDefault();
    let newValue = event.target.value;
    debugger;
    setValue(newValue);
    // dispatch akcije da spremi vrijednost Form Controla u Context
    dispatch(handleFormControl(name, newValue, valid, error));
    dispatch(validateFormControl(name, { value: newValue, valid, error }));
  };

  const setBorderStyles = () => {
    if (error) {
      return "2px solid red";
    }
  };

  const getElementName = () => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const InputRadio = () => {
    return (
      <div className="options">
        {options.map((option, index) => {
          return (
            <div key={index}>
              <input
                type={type}
                className="form-control"
                name={name}
                value={value}
                style={{ border: setBorderStyles() }}
                onChange={handleChange}
              />
              <label htmlFor={name} className="option">
                {option}
              </label>
            </div>
          );
        })}
      </div>
    );
  };

  const InputText = () => {
    return (
      <input
        type={type}
        className="form-control"
        name={name}
        value={value}
        style={{ border: setBorderStyles() }}
        onChange={handleChange}
      />
    );
  };

  return (
    <div className="FormControl">
      <label className="label" htmlFor={name}>
        {getElementName()}
      </label>
      {options !== null ? <InputRadio /> : <InputText />}
      {error && <div className="form-error">{error}</div>}
    </div>
  );
}

// zadatak - omogućiti error handling preko akcija
