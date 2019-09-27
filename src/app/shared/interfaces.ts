//es una buena practica dejear las INTER. juntas
export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal? : number;//TODO: RECUERDA QUE ES OPCIONAL CUANDO FINALIZA EN '?', ES DECIR NULL(?)
    customerSince: any;
}

export class IOrder {
    customerId: number;
    orderItems: IOrderItem[];
}

export class IOrderItem{
    id: number;
    productName: string;
    itemCost: number;
}