import React from 'react'

const OrderSubmit = ({label, handleClick}) =>{
    return(
        <div className="order__wrap">
            <button className='order__submit-btn' onClick={()=>handleClick('Order page')}>{label}</button>
        </div>
    )
}
export default OrderSubmit