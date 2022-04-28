import React from "react";
import Button from "../../shared/Button/Button";
import "./UserTasks.scss";

export default function UserTasks() {
  var totalColor = "#2978a0";
  var inactive = true;
  const zadatci = {
    prvi: "Napraviti prezentaciju",
    drugi: "Napraviti primjere",
    treci: "Napraviti zadatke",
    cetvrti: "Napraviti rješenja",
  };

  const totalTasks = () => {
    return Object.keys(zadatci).length;
  };

  return (
    <div className="UserTasks">
      <ul className="list">
        <li className="list-item">{zadatci.prvi}</li>
        <li className="list-item">{zadatci.drugi}</li>
        <li className="list-item">{zadatci.treci}</li>
        <li
          className={inactive ? "list-item list-item--inactive" : "list-item"}
        >
          {zadatci.cetvrti}
        </li>
      </ul>
      <div className="actions">
        <h3 className="total">
          <span style={{ color: totalColor }}>Ukupno: {totalTasks()}</span>
        </h3>
        <Button>Dodaj zadatak</Button>
      </div>
    </div>
  );
}
