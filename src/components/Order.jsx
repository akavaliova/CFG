import React from 'react'
import OrderCounter from './OrderCounter'
import OrderHeader from './OrderHeader'
import OrderForm from './OrderForm'
import OrderSubmit from './OrderSubmit'

function Order() {
    const handleClick = () => {
        alert("You have made your order, we will contact with you soon")
      }
    return (
        <div>
            <OrderHeader />
            <OrderCounter />
            <OrderForm />
            <OrderSubmit label="Submit data" handleClick={handleClick}/>
        </div>
    )
}
export default Order;



