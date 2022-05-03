import Form from "osmo_predavanje/Form/Form";
import { userFields } from "osmo_predavanje/Form/Form.config";
import { StoreProvider } from "osmo_predavanje/store/Store";
import { initialState, stateReducer } from "osmo_predavanje/reducers/reducer";

export default function UserAdd() {
  return (
    <>
      <StoreProvider initialState={initialState} reducer={stateReducer}>
        <Form formName="userForm" formFields={userFields} />
      </StoreProvider>
    </>
  );
}
