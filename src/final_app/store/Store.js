import React from "react";

// inicijaliziramo Context objekt
const Store = React.createContext();
// postavljamo displayName
Store.displayName = "Context";

// reusable funkcija koja stvara Context objekt
export const useStore = () => {
  return React.useContext(Store);
};

// reusable funkcija koja služi kao Provider element
// prima children JSX elemente, initialState aplikacije i reducer
export const StoreProvider = ({ children, initialState, reducer }) => {
  // setup reducera, destrukturiramo globalState i dispatch funkciju
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  // vraćamo Provider element, a u value atribut prosljeđujemo objekt s globalState i dispatch
  // što smo dobili tokom setupa reducera
  // children element predstavlja child JSX elemente
  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};
