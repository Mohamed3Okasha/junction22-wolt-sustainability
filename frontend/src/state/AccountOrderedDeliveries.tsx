import React from "react";
import Form from 'react-bootstrap/Form';

enum MealTime  {
    BREAKFAST,
    LUNCH,
    DINNER
}

enum MealType {
    VEGAN,
    REGULAR,
}

export enum DeliveryMethod {
  SELF_PICKUP="self",
  FIXED="fixed",
  SCHEDUELED="scheduled",
  QUICK_COURIER="quick_courier",
  UNKNOWN="unknown"
}

type Delivery = {
    delivery_date: Date,
    delivery_method: DeliveryMethod,
    mealId: number,
}

const accountOrdedDeliveries: Delivery[] = [
  {
    delivery_date:  new Date(new Date().getTime() - 86400000*1),
    delivery_method: DeliveryMethod.QUICK_COURIER,
    mealId: 5,
  },
  {
    delivery_date: new Date(),
    delivery_method: DeliveryMethod.UNKNOWN,
    mealId: 1,
  },
  {
    delivery_date: new Date(new Date().getTime() + 86400000*2),
    delivery_method: DeliveryMethod.UNKNOWN,
    mealId: 2,
  },
  {
    delivery_date: new Date(new Date().getTime() + 86400000*4),
    delivery_method: DeliveryMethod.UNKNOWN,
    mealId: 2,
  },
  {
    delivery_date: new Date(new Date().getTime() + 86400000*5),
    delivery_method: DeliveryMethod.UNKNOWN,
    mealId: 3,
  },
  {
    delivery_date: new Date(new Date().getTime() + 86400000*6),
    delivery_method: DeliveryMethod.UNKNOWN,
    mealId: 4,
  },
];

const AccountOrderedDeliveriesContext = React.createContext(accountOrdedDeliveries);
const AccountOrderedDeliveriesDispatcher = React.createContext(undefined as any);

export const useAccountDeliveryData = () => [
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