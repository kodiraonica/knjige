import Form from "./Form/Form";
import { StoreProvider } from "./store/Store";
import { initialState, stateReducer } from "./reducers/reducer";

export default function SedmoPredavanje() {
  const userFields = [
    { type: "text", name: "name", options: null },
    { type: "text", name: "email", options: null },
    { type: "password", name: "password", options: null },
  ];

  const bookFields = [
    { type: "text", name: "name", options: null },
    { type: "text", name: "ISBN", options: null },
    { type: "text", name: "genre", options: null },
    { type: "radio", name: "availability", options: ["Borrowed", "Available"] },
  ];
  return (
    <>
      <StoreProvider initialState={initialState} reducer={stateReducer}>
        <Form formName="userForm" formFields={userFields} />
        <Form formName="bookForm" formFields={bookFields} />
      </StoreProvider>
    </>
  );
}
