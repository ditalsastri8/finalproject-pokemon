'use client'
import Image from "next/image"

interface Cat {
    name: string,
    imgCat: string
}


function ItemProduct({name, imgCat}: Cat) {
    console.log(ItemProduct)
    return (
        <div className="item-product p-4 bg-blue-100">
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

export default ItemProduct;