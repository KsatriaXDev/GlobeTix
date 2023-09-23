"use client";
import {createContext} from "react";

export const BaliZooContext = createContext();

export default function BaliZooProvider({children}){
    const carouselImage = [
        {
            "id" : 1,
            "src": "https://freeimghost.net/images/2023/09/23/bali1.png",
            "alt": "BaliZoo1"
        },
        {
            "id" : 2,
            "src": "https://freeimghost.net/images/2023/09/23/balizoo2.jpeg",
            "alt": "BaliZoo2"
        },
        {
            "id" : 3,
            "src": "https://freeimghost.net/images/2023/09/23/balizoo3.jpeg",
            "alt": "BaliZoo3"
        },
        {
            "id" : 4,
            "src": "https://freeimghost.net/images/2023/09/23/balizoo4.jpeg",
            "alt": "BaliZoo4"
        }
    ]
    const detail = 
        {
            "title": "Bali Zoo",
            "history": "Bali Zoo yang didirikan di tahun 2002 merupakan kebun sekaligus area konservasi binatang pertama di kawasan Bali.",
            "p1": "Bali Zoo merupakan kebun binatang pertama yang ada di pulau bali. Disini anda bisa melihat berbagai jenis binatang langka dari dalam negeri sampai binatang langka yang berasal dari luar negeri. Bali zoo park atau kebun binatang bali ini tepatnya beralamat di Desa Singapadu, Gianyar, Bali. Kurang lebih enam kilometer dari kota denpasar.",
            "p2": "Bali zoo park memiliki luas kurang lebih 12 hektar. dan di huni oleh kurang lebih 100 jenis species binatang langka. Yang terbagi atas tiga katagori yaitu mamalia, reptil dan burung. Bali zoo park merupakan tempat wisata yang sangat tepat dan nyaman sekali wisata keluarga maupun rombongan. Di Bali zoo park anak – anak bisa mengenal secara langsung berbagai jenis binatang.",
            "price": "$1500"
        }
    return <BaliZooContext.Provider value={{carouselImage, detail}}>{children}</BaliZooContext.Provider>
}
