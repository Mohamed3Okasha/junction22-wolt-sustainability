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

export enum DeliveryStatus {
    IN_PLANNING,
    PREPARING_FOOD,
    READY_TO_BE_DELIVERED,
    WAITING_FOR_DELIVERY,
    IN_DELIVERY,
    DELIVERED
}

export enum DeliveryMethod {
  SELF_PICKUP="self",
  FIXED="fixed",
  SCHEDUELED="scheduled",
  QUICK_COURIER="quick_courier",
  UNKNOWN="unknown"
}

export type Delivery = {
    delivery_date: Date,
    delivery_method: DeliveryMethod,
    meal: string,
    status: DeliveryStatus
}

const accountOrdedDeliveries: Delivery[] = [
  {
    delivery_date:  new Date(new Date().getTime() - 86400000*1),
    delivery_method: DeliveryMethod.QUICK_COURIER,
    meal: "Pasta Bolognese",
    status: DeliveryStatus.DELIVERED
  },
  {
    delivery_date: new Date(),
    delivery_method: DeliveryMethod.UNKNOWN,
    meal: "Caesar salat",
    status: DeliveryStatus.READY_TO_BE_DELIVERED
  },
  {
    delivery_date: new Date(new Date().getTime() + 86400000*2),
    delivery_method: DeliveryMethod.UNKNOWN,
    status: DeliveryStatus.READY_TO_BE_DELIVERED,
    meal: "Chili con carne"

  },
  {
    delivery_date: new Date(new Date().getTime() + 86400000*4),
    delivery_method: DeliveryMethod.UNKNOWN,
    status: DeliveryStatus.PREPARING_FOOD,
    meal: "Rice wok"

  },
  {
    delivery_date: new Date(new Date().getTime() + 86400000*5),
    delivery_method: DeliveryMethod.UNKNOWN,
    status: DeliveryStatus.IN_PLANNING,
    meal: "Pasta Carbonara"
  },
  {
    delivery_date: new Date(new Date().getTime() + 86400000*6),
    delivery_method: DeliveryMethod.UNKNOWN,
    status: DeliveryStatus.IN_PLANNING,
    meal: "Chicken masala"
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