import "./User.scss";
import Form from "./Form/Form";
import { userFields } from "../../Form/form.config";
import { StoreProvider } from "./store/Store";
import { initialState, stateReducer } from "./reducers/reducer";

export default function UserAdd() {
  return (
    <>
      <StoreProvider initialState={initialState} reducer={stateReducer}>
        <Form formName="userForm" formFields={userFields} />
      </StoreProvider>
    </>
  );
}
