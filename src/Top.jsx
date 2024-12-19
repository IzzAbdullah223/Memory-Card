import { useState } from 'react'
import image from './assets/image.png'

function Top(Props){

    

    return(
        <div className="TopContainer">
            <div className="LeftSide"> 
            <div className="ImageContainer"> 
                <img src={image}></img>
            </div>
            <h2>MEMORY CARD GAME</h2>
            </div>
         


            <div className="RightSide"> 
                <h2>Score: {Props.Score}</h2>
                <h2 className='bScore'>Best Score: {Props.bestScore} </h2>
            </div>
            
        </div>
    )

}



export default Top