import React from 'react'
import HomeHeader from './HomeHeader'
import HomeImage from './HomeImage';
import HomeBtn from './HomeBtn';

function Home() {
      const handleClick = (x) => {
        alert(`You will be redirected to the ${x}`)
      }
    return (
        <div>
            <HomeHeader />
            <HomeImage />
            <HomeBtn label="Order a cake" handleClick={handleClick}/>
        </div>
    )
}
export default Home;