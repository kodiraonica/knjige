import RouterOutlet from "./RouterOutlet";
import { StoreProvider } from "./store/Store";
import { initialState, stateReducer } from "./reducers/reducer";

export default function OsmoPredavanje() {
  return (
    <>
      <StoreProvider initialState={initialState} reducer={stateReducer}>
        <RouterOutlet />
      </StoreProvider>
    </>
  );
}
