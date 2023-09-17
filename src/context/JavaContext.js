"use client";

import {  createContext, useContext } from "react";

const JavaContext = createContext()

export default function JavaProvider ({children})  {
    const javaTop = [
        {
            "id": 1,
            "title": "Monas - Jakarta",
            "thumbnail": "https://freeimghost.net/images/2023/09/17/Monas1.jpeg",
            "link": "/monas"
        },
        {
            "id": 2,
            "title": "Taman Safari - Jakarta",
            "thumbnail": "https://freeimghost.net/images/2023/09/17/Tamansafari1.jpeg",
            "link": "/taman-safari"
        },
        {
            "id": 3,
            "title": "Bromo - DIY Yogyakarta",
            "thumbnail": "https://freeimghost.net/images/2023/09/17/Bromo1.jpeg",
            "link": "/bromo"
        },
        {
            "id": 4,
            "title": "Borobudur - DIY Yogyakarta",
            "thumbnail": "https://freeimghost.net/images/2023/09/17/Borobudur1.jpeg",
            "link": "/candi-borobudur"
        },
    ]

    const javaDisc = [
        {
            "id": 1,
            "title": "Java1",
            "thumbnail": "a",
            "link": "a.com"
        },
        {
            "id": 2,
            "title": "Java2",
            "thumbnail": "a",
            "link": "a.com"
        },
        {
            "id": 3,
            "title": "Java3",
            "thumbnail": "a",
            "link": "a.com"
        },
    ]

    const javaNew = [
        {
            "id": 1,
            "title": "Java1",
            "thumbnail": "a",
            "link": "a.com"
        },
        {
            "id": 2,
            "title": "Java2",
            "thumbnail": "a",
            "link": "a.com"
        },
        {
            "id": 3,
            "title": "Java3",
            "thumbnail": "a",
            "link": "a.com"
        },
        {
            "id": 4,
            "title": "Java4",
            "thumbnail": "a",
            "link": "a.com"
        },
    ]
    return(
        <JavaContext.Provider value={{javaTop, javaDisc, javaNew}}>
            {children}
        </JavaContext.Provider>
    )
    
}

export function useJavaContext(){
        return useContext(JavaContext)
    }