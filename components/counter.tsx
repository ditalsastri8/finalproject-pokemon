'use client'
import { useState } from "react"


function Counter () {
    const [count, setCount] = useState(0)

    function handleClick () {
        setCount(100)
    }

    return (
        <div className="flex-gap-2">
            <button>-</button>
            <span>{count}</span>
            <button onClick={handleClick}>+</button> 
        </div>
    )
}
export default Counter