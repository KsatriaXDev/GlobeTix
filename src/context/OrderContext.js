"use client"

import { createContext } from "react"

export const OrderContext= createContext()

export default function OrderProvider ({children}){
    const orderList = [
        {
            id: 1,
            order: "Monas-Jakarta Tour",
            price: "$1500",
            date: "12-12-23"
        },
        {
            id: 2,
            order: "Bali Zoo-Bali Tour",
            price: "$1500",
            date: "12-12-23"
        }
    ]
    return <OrderContext.Provider value={{orderList}}>{children}</OrderContext.Provider>
}