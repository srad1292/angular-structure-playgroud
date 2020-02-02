import { IOrder } from "@app/schemas/order.interface";

export const orderData: IOrder[] = [
    {
        name: 'Tylenol',
        patient: 'Bob Brown',
        orderId: 1,
        status: 'Pending',
        price: 200.00,
    },
    {
        name: 'Asprin',
        patient: 'Sally Heart',
        orderId: 2,
        status: 'Waiting For Delivery',
        price: 29.99,
    },
    {
        name: 'Ibuprofen',
        patient: 'Kristina Manley',
        orderId: 3,
        status: 'Pending',
        price: 100.00,
    },
    {
        name: 'Oxycodon',
        patient: 'Bob Brown',
        orderId: 4,
        status: 'Pending',
        price: 325.00,
    },
    {
        name: 'Morphine',
        patient: 'Hope Henderson',
        orderId: 5,
        status: 'Pending',
        price: 185.32,
    }
]