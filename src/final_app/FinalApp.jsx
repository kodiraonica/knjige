import { BrowserRouter } from "react-router-dom";
import RouterOutlet from "final_app/RouterOutlet";
import { StoreProvider } from "final_app/store/Store";
import { initialState, stateReducer } from "final_app/reducers/reducer";
import Nav from "final_app/Nav/Nav";

export default function FinalApp() {
  return (
    <>
      <BrowserRouter>
        <StoreProvider initialState={initialState} reducer={stateReducer}>
          <Nav />
          <RouterOutlet />
        </StoreProvider>
      </BrowserRouter>
    </>
  );
}
