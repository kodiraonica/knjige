import { BrowserRouter } from "react-router-dom";
import RouterOutlet from "osmo_predavanje/RouterOutlet";
import { StoreProvider } from "osmo_predavanje/store/Store";
import { initialState, stateReducer } from "osmo_predavanje/reducers/reducer";

export default function OsmoPredavanje() {
  return (
    <>
      <BrowserRouter>
        <StoreProvider initialState={initialState} reducer={stateReducer}>
          <RouterOutlet />
        </StoreProvider>
      </BrowserRouter>
    </>
  );
}
