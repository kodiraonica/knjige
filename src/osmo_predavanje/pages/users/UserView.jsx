import "../../assets/scss/style.scss";
import "./User.scss";
import { useStore } from "../store/Store";
import { Link } from "react-router-dom";

const UserView = () => {
  const [globalState, dispatch] = useStore();
  const userList = globalState.user;
  return (
    <div className="UserView">
      <ul>
        {userList.map((user, index) => {
          return (
            <li className="list-item">
              {user.email} ({user.name})
              <span className="list-action">
                <Link to={"/user/" + index}>Edit</Link>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserView;
