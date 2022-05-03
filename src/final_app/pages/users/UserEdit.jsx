import { useStore } from "final_app/store/Store";
import Form from "final_app/Form/Form";
import { userFields } from "final_app/Form/Form.config";
import { useNavigate } from "react-router-dom";
import Button from "shared/Button/Button";

const UserEdit = (props) => {
  const navigate = useNavigate();

  const [globalState, dispatch] = useStore();
  const userId = props.match.params.userId;
  const user = globalState.users[userId];

  return (
    <main style={{ marginTop: "4rem", padding: "0rem 4rem" }}>
      <div className="UserEdit">
        <Button onClick={() => navigate(-1)}>Go Back</Button>
        <Form edit={user} formName="userForm" formFields={userFields} />
      </div>
    </main>
  );
};

export default UserEdit;
