import { OrderStatus } from "@/components/types/OrderStatus";

export interface Order {
  orderId: number;
  orderDate: Date;
  orderStatus: 0;
  orderStatusInfo: OrderStatus;
  accountId: number;
}
