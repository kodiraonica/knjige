import "./User.scss";
import { useStore } from "../store/Store";
import Form from "../Form/Form";
import { userFields } from "../Form/form.config";

const UserEdit = (props) => {
  const [globalState, dispatch] = useStore();
  const userId = props.match.params.userId;
  const user = globalState.users[userId];

  return (
    <div className="UserEdit">
      <Form edit={user} formName="userForm" formFields={userFields} />
    </div>
  );
};

export default UserEdit;
