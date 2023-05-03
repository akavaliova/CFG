import React from 'react';
import style from './ButtonStyle.css';
const Button = ({ message = "" }) => {
  return (
    <button className="my-buttton" type="button">
      <h2 className='button__text'>
        {message}
      </h2>
    </button>
  );
}
export default Button;

// const Button = (props)=>{
//     return (
//         <div>
//             <button className='my-buttton'>{props.label}</button>
//             <p className='hello'>{props.greeting}</p>
//         </div>
//     )
// }

// export default Button 

// //destructing props:
// const Button = ({greeting, label, handleClick}) =>{
//     return(
//         <div>
//             <button className='my-buttton' onClick={()=>handleClick('hello')}>{label}</button>
//             <p className='hello'>{greeting}</p>
//         </div>
//     )
// }
// export default Button