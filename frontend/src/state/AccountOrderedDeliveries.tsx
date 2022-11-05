import React from "react";


enum MealTime  {
    BREAKFAST,
    LUNCH,
    DINNER
}

enum MealType {
    VEGAN,
    REGULAR,
}

type Delivery = {
    order_id: String,
    meal_time: MealTime,
    meal_type: MealType,
}

const accountOrdedDeliveries: Delivery[] = [];

const AccountOrderedDeliveriesContext = React.createContext(accountOrdedDeliveries);
const AccountOrderedDeliveriesDispatcher = React.createContext(undefined as any);

export const useGlobalState = () => [
  React.useContext(AccountOrderedDeliveriesContext),
  React.useContext(AccountOrderedDeliveriesDispatcher)
];

export const AccountOrderedDeliveriesProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (state: any, newValue: any) => ({ ...state, ...newValue }),
    accountOrdedDeliveries
  );
  return (
    <AccountOrderedDeliveriesContext.Provider value= {state }>
    <AccountOrderedDeliveriesDispatcher.Provider value={dispatch}>
      { children }
      </AccountOrderedDeliveriesDispatcher.Provider>
      </AccountOrderedDeliveriesContext.Provider>
    );
};