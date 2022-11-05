import React from "react";

const globalState: any = {
  auth: false,
};

const GlobalStateContext = React.createContext(globalState);
const DispatchStateContext = React.createContext(undefined as any);

export const useGlobalState = () => [
  React.useContext(GlobalStateContext),
  React.useContext(DispatchStateContext)
];

export const GlobalStateProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (state: any, newValue: any) => ({ ...state, ...newValue }),
    globalState
  );
  return (
    <GlobalStateContext.Provider value= {state }>
    <DispatchStateContext.Provider value={dispatch}>
      { children }
      </DispatchStateContext.Provider>
      </GlobalStateContext.Provider>
    );
};