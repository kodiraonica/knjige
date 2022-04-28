import React from "react";

export default function UserBooks() {
  const knjige = {
    prva: "George R.R. Martin - Fevre Dream",
    druga: "Robert E. Howard - Wolves Beyond the Border",
    treca: "Terry Prattchett - The Watch",
    cetvrta: "Neil Gaiman - Sandman",
  };

  const totalBooks = () => {
    return Object.keys(knjige).length;
  };

  return (
    <div className="UserTasks">
      <ul className="list">
        <li className="list-item">{knjige.prva}</li>
        <li className="list-item">{knjige.druga}</li>
        <li className="list-item">{knjige.treca}</li>
        <li className="list-item">{knjige.cetvrta}</li>
      </ul>
      <h3>Ukupno: {totalBooks()}</h3>
    </div>
  );
}
