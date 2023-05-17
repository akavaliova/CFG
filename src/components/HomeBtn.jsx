import React from 'react';
import { Link } from 'react-router-dom'

const Button = ({label, handleClick}) =>{
    return(
        <Link to='Order'>
            <button className='home__buttton' onClick={()=>handleClick('Order page')}>{label}</button>
        </Link>
    )
}
export default Button