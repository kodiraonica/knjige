import "final_app/assets/scss/style.scss";
import { useStore } from "final_app/store/Store";
import { Link } from "react-router-dom";
import Button from "shared/Button/Button";
import { useNavigate } from "react-router-dom";

const UserView = () => {
  const navigate = useNavigate();
  const [globalState, dispatch] = useStore();
  const userList = globalState.user;

  const handleAddUser = () => {
    navigate("/users/new");
  };

  return (
    <main style={{ marginTop: "4rem", padding: "0rem 4rem" }}>
      <div className="UserView">
        <Button onClick={handleAddUser}>Add User</Button>
        {!userList || userList.length === 0 ? <h2>No Users</h2> : ""}
        <ul>
          {userList &&
            userList.map((user, index) => {
              return (
                <li className="list-item">
                  {user.email} ({user.name})
                  <span className="list-action">
                    <Link to={"/user/edit/" + index}>Edit</Link>
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
};

export default UserView;
