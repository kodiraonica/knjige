import Form from "./Form/Form";
import { bookFields } from "../../Form/form.config";
import { StoreProvider } from "./store/Store";
import { initialState, stateReducer } from "./reducers/reducer";

export default function BookAdd() {
  return (
    <>
      <StoreProvider initialState={initialState} reducer={stateReducer}>
        <Form formName="bookForm" formFields={bookFields} />
      </StoreProvider>
    </>
  );
}
