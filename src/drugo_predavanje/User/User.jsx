import { React } from "react";
import UserTasks from "./UserTasks";
import avatar from "../../assets/userprofile.png";
import "./User.scss";

export default function User(props) {
  return (
    <div className="User">
      <div className="container">
        <h2>Zadatci korisnika {props.name}</h2>
        <img src={avatar} alt="User logo" className="avatar" />
      </div>
      <UserTasks />
    </div>
  );
}
