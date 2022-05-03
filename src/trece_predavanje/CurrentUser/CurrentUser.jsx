import React from "react";
import Button from "shared/Button/Button";

export default function CurrentUser() {
  const [user, setUser] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);

  const setCurrentUser = (user, loggedIn) => {
    setUser(user);
    setLoggedIn(loggedIn);
  };

  const getCurrentUser = () => {
    return user;
  };

  const isLoggedIn = () => {
    return loggedIn ? "Yes" : "No";
  };

  return (
    <>
      <ul>
        <li>User: {getCurrentUser()}</li>
        <li>Logged In: {isLoggedIn()}</li>
      </ul>
      <Button onclick={setCurrentUser("Kodiraonica", true)} />
    </>
  );
}
