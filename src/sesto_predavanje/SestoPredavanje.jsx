import UserForm from "sesto_predavanje/Form/UserForm";
import { StoreProvider } from "sesto_predavanje/store/Store";
import { initialState, stateReducer } from "sesto_predavanje/reducers/reducer";

export default function SestoPredavanje() {
  return (
    <>
      <StoreProvider initialState={initialState} reducer={stateReducer}>
        <UserForm />
      </StoreProvider>
    </>
  );
}
