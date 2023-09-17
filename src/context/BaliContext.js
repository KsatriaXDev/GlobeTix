"use client";

import {  createContext, useContext } from "react";

const BaliContext = createContext()

export default function BaliProvider ({children})  {
    const baliTop = [
        {
            "id": 1,
            "title": "Bali1",
            "thumbnail": "a",
            "link": "a.com"
        },
        {
            "id": 2,
            "title": "Bali2",
            "thumbnail": "a",
            "link": "a.com"
        },
        {
            "id": 3,
            "title": "Bali3",
            "thumbnail": "a",
            "link": "a.com"
        },
        {
            "id": 4,
            "title": "Bali4",
            "thumbnail": "a",
            "link": "a.com"
        },
    ]

    const baliDisc =[
        {
            "id": 1,
            "title": "Bali1",
            "thumbnail": "a",
            "link": "a.com"
        },
        {
            "id": 2,
            "title": "Bali2",
            "thumbnail": "a",
            "link": "a.com"
        }
    ]

    const baliNew = [
        {
            "id": 1,
            "title": "Bali1",
            "thumbnail": "a",
            "link": "a.com"
        },
        {
            "id": 2,
            "title": "Bali2",
            "thumbnail": "a",
            "link": "a.com"
        },
        {
            "id": 3,
            "title": "Bali3",
            "thumbnail": "a",
            "link": "a.com"
        },
        {
            "id": 4,
            "title": "Bali4",
            "thumbnail": "a",
            "link": "a.com"
        },
    ]
    return(
        <BaliContext.Provider value={{baliTop, baliDisc, baliNew}}>
            {children}
        </BaliContext.Provider>
    )
    
}

export function useBaliContext(){
        return useContext(BaliContext)
    }