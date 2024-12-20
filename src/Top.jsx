import { useState } from 'react'
import image from './assets/image.png'

function Top(Props){

    

    return(
        <div className='TopContainer'> 
         <h2>Score: {Props.Score}</h2>
         <div className="MiddleTop">
         <img src={image}></img>
         <h3>MEMORY CARD GAME</h3>
         </div>
        <h2>Best Score: {Props.bestScore}</h2>
       
         </div>
     
         
    )
}



export default Top