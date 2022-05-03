import Form from "osmo_predavanje/Form/Form";
import { bookFields } from "osmo_predavanje/Form/Form.config";
import { StoreProvider } from "osmo_predavanje/store/Store";
import { initialState, stateReducer } from "osmo_predavanje/reducers/reducer";

export default function BookAdd() {
  return (
    <>
      <StoreProvider initialState={initialState} reducer={stateReducer}>
        <Form formName="bookForm" formFields={bookFields} />
      </StoreProvider>
    </>
  );
}
