import React from "react";
import "./UserForm.scss";

export default function Form() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const defaultErrors = {
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

  const handleChange = (event) => {
    console.log(event.target.name);
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
  };

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validatePassword = (password) => {
    return password.match(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/);
  };

  const handleSubmit = (event) => {
    var invalid = errors;
    event.preventDefault();
    debugger;
    if (!name) {
      invalid.name = defaultErrors.name.required;
    } else if (name.length < 3) {
      invalid.name = defaultErrors.name.short;
    }

    if (!email) {
      invalid.email = defaultErrors.email.required;
    } else if (!validateEmail(email)) {
      invalid.email = defaultErrors.email.notValid;
    }

    if (!password) {
      invalid.password = defaultErrors.password.required;
    } else if (!validatePassword(password)) {
      invalid.password = defaultErrors.password.special;
    }

    Object.keys(invalid).forEach((element) => {
      if (invalid[element].length === 0) {
        console.log("Field " + element + " valid!");
      } else {
        console.log("Field " + element + " invalid!");
      }
    });
    setErrors(invalid);
  };

  return (
    <div className="UserForm">
      <form onSubmit={handleSubmit}>
        <label className="label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
        <label className="label">Email</label>
        <input
          type="text"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
        ></input>
        <label className="label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// zadatak: napraviti BookForm i povezati prvo predavanje button Dodaj knjigu
