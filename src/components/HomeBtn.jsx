import React from 'react';

const Button = ({label, handleClick}) =>{
    return(
        <div>
            <button className='home__buttton' onClick={()=>handleClick('Order page')}>{label}</button>
        </div>
    )
}
export default Button