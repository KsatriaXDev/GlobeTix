"use client"

import { createContext } from "react"

export const OrderContext= createContext()

export default function OrderProvider ({children}){
    const orderList = [
        {
            id: 1,
            order: "Lalalal",
            price: "lalala",
            date: "lala"
        },
        {
            id: 2,
            order: "lululu",
            price: "ulul",
            date: "lulul"
        },
        {
            id: 3,
            order: "aalal",
            price: "alal",
            date: "aakak"
        }
    ]
    return <OrderContext.Provider value={{orderList}}>{children}</OrderContext.Provider>
}