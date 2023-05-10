import React from 'react';
import { useState } from "react";

function OrderCounter () {

    const [count, setCount] = useState(0)

    const handleDec = () => {
        setCount(count - 1)
    }

    const handleInc = () => {
        setCount(count + 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <div className='counter'>
           <div className='count'>
            <div>{count}</div>
            <button className="btn__dec" onClick={handleDec}>-</button>
            <button className="btn__inc" onClick={handleInc}>+</button>
            <button className="btn__reset" onClick={handleReset}>reset</button>
           </div>
        </div>
    )
}
export default OrderCounter;