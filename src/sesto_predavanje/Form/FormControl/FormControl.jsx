import { useState } from "react";
import "./FormControl.scss";
import { useStore } from "../../store/Store";
import { handleUserFormControl } from "../../actions/addUser";

export default function FormControl(props) {
  const [, dispatch] = useStore();
  const [type, setType] = useState(props.type);
  const [name, setName] = useState(props.name);
  const [value, setValue] = useState(props.value);
  const [valid, setValid] = useState(props.valid);
  const [errors, setErrors] = useState(props.errors);

  const handleChange = (event) => {
    event.preventDefault();
    let [name, value] = [event.target.name, event.target.value];

    // postavljanje lokalne vrijednosti
    setValue(value);
    // dispatch akcije da spremi vrijednost Form Controla u Context
    dispatch(handleUserFormControl(name, value));
  };

  const setBorderStyles = () => {
    if (valid !== null) {
      return valid ? "2px solid green" : "2px solid red";
    }
  };

  const getElementName = () => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="FormControl">
      <label className="label" htmlFor={name}>
        {getElementName()}
      </label>
      <input
        type={type}
        className="form-control"
        name={name}
        value={value}
        style={{ border: setBorderStyles() }}
        onChange={handleChange}
      ></input>
      <div className="form-error">{errors.name}</div>
    </div>
  );
}

// zadatak - omogućiti error handling preko akcija
