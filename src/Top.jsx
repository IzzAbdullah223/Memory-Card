import { useState } from 'react'
import image from './assets/image.png'

function Top(Props){

    

    return(
        <div className="TopContainer">
            <div className="ImageContainer"> 
                <img src={image}></img>
            </div>
            <h1>Score: {Props.Score}</h1>
            <h1>Best Score: {Props.bestScore} </h1>
            
        </div>
    )

}



export default Top