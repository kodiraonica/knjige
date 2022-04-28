import UserForm from "./Form/UserForm";
import { StoreProvider } from "./store/Store";
import { initialState, stateReducer } from "./reducers/reducer";

export default function SestoPredavanje() {
  return (
    <>
      <StoreProvider initialState={initialState} reducer={stateReducer}>
        <UserForm />
      </StoreProvider>
    </>
  );
}
