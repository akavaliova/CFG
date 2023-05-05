import React from 'react'
import homeCake from './images/homeCake.jpg'

function HomeImage() {
    return (
        <div>
            <img className='home__cake-img' src={homeCake} alt= "The piscture of a cake"/>
        </div>
    )
}

export default HomeImage 