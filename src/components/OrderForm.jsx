import React from 'react'

function OrderForm () {
    return (
        <form className="order__form">
            <input className="order__input" type="text" name="namefirst" placeholder="first name"></input>
            <input className="order__input" type="text" name="namesecond" placeholder="second name"></input>
            <input className="order__input" type="text" name="email" placeholder="e-mail"></input>
            <input className="order__input" type="text" name="namesecond" placeholder="+() 000-00-00"></input>
        </form>
    )
}

export default OrderForm 