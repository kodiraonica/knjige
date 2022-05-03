import { useStore } from "osmo_predavanje/store/Store";
import Form from "osmo_predavanje/Form/Form";
import { userFields } from "osmo_predavanje/Form/Form.config";

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
