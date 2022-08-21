export interface IOrderStatus {
  id: number;
  name: string;
}

export const ORDER_STATUS: IOrderStatus[] = [
  { id: 1, name: "PENDING" },
  { id: 2, name: "OPEN" },
  { id: 6, name: "IN_PROGRESS" },
  { id: 8, name: "CANCELLED" },
  { id: 10, name: "PROCESSING" },
  { id: 14, name: "PARTIALLY_SHIPPED" },
  { id: 15, name: "SHIPPED" },
  { id: 20, name: "ON_HOLD" }
];
