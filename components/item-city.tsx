'use client'
import Image from "next/image"

interface Cat {
    name: string,
    imgCat: string
}


function ItemCity({name, imgCat}: Cat) {
    console.log(ItemCity)
    return (
        <div className="item-city p-4 bg-yellow-100">
            <Image
             src={imgCat}
             alt={name} 
             width={200} 
             height={250} 
             />
            <h2 className="text-xl font-bold">{name}</h2>
        </div>
    )
}

export default ItemCity;