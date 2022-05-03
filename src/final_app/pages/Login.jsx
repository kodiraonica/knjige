import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "final_app/assets/style.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(true);

  const isValid = () => {
    return !(email && password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("user", email);
    window.dispatchEvent(new Event("login"));
    navigate("/");
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }

    if (isValid()) {
      setInvalid(false);
    }
  };
  return (
    <div className="purple-background page">
      <div className="flex items-center content-center">
        <div className="col max-50">
          <div className="card flex content-center">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center">Ulogiraj se!</h1>
              <fieldset>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </fieldset>

              <fieldset>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </fieldset>
              <button type="submit" disabled={invalid} className="btn-form">
                Ulogiraj se!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
