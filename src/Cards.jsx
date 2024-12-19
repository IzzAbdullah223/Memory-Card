import { useEffect, useState } from "react"
import Gif from './assets/LoadingGif.Gif'
import cardBack from './assets/CardBack.png'
import cardClickSound from './assets/CardClickSound.mp3'
import ReactParallaxTilt from 'react-parallax-tilt';


function Cards(Props){
    console.log(window.innerWidth)
    console.log(window.innerHeight)

    
    const[data,setData]= useState(null)
    const[Loading,setLoading] = useState(true)
    const Cards=[1,2,3,4,5,6,7,8,9,10,11,12]
    const [cardArray,setCardArray]= useState([])
    const [playedCards,setPlayedCards] = useState([])

    useEffect(()=>{
        
        const fetchData= async ()=>{
            const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
            const result = await response.json()
            setLoading(false)
            setData(result)
            
        }

        fetchData()
        
    },[])


   
    useEffect(() => {
        if (data !== null) {
            const cards = document.querySelectorAll(".Card")
                setTimeout(()=>{
                    cards.forEach(card=>{
                        let randomNumber = Math.floor(Math.random()*13436)
                        let cardImg=card.querySelector("img")
                        cardImg.src = data.data[randomNumber].card_images[0].image_url
                        setCardArray(C=>[...C,data.data[randomNumber].card_images[0].image_url])
                    })
                },2000)
                
        }
    }, [data]);
 

    function startNewGame(){
            setCardArray([]);  //Clearing array for new game
            setPlayedCards([]);  

        

            const cards = document.querySelectorAll(".Card")
                cards.forEach(card=>{
                    let cardImg = card.querySelector("img")
                    cardImg.src = cardBack
                })
            setTimeout(()=>{
                cards.forEach(card=>{
                let randomNumber = Math.floor(Math.random()*13436)
                    let cardImg=card.querySelector("img")
                    cardImg.src = data.data[randomNumber].card_images[0].image_url
                    setCardArray(C=>[...C,data.data[randomNumber].card_images[0].image_url])
                
                })
            },2000)
    }

    function PlayRound(event){
       const audio = new Audio(cardClickSound)
       let Check = true
        audio.play();
        let test = event.currentTarget.querySelector("img").src
        setPlayedCards(P=>[...P,test])
           for(let i=0;i<=playedCards.length;i++){// Check if the player lost or not 
           if(test==playedCards[i]){
             Check=false
             Props.setScore(S=>S=0)

             if(!Check){ //Set the best score after the game end 
                 if(Props.Score>Props.bestScore){
                    Props.setBestScore(B=>B=Props.Score)
                 }
                 startNewGame()
             }            
           }
        }

        if(Check){ // Player will keep playing and cards will be shuffled
            Props.setScore(S=>S+1);
            Shuffle()
             
        }     
    }

    function Shuffle(){
        const cards = document.querySelectorAll(".Card")    
        for(let i=cardArray.length-1;i>0;i--){//To shuffle the array I used Fisher-Yates algorithim
            const random = Math.floor(Math.random()*(i+1));
            [cardArray[i],cardArray[random]] = [cardArray[random], cardArray[i]];
        }
        let Random=0;
        cards.forEach(card=>{
            let cardImg=card.querySelector("img")
            cardImg.src = cardArray[Random]
            ++Random
     })

    }
 

    //-------------------------------
   
    return(
        
        <div>
           {Loading? (
            <div className="LoadingContainer">
                <h1>Loading. . . </h1>
                <img src={Gif} width="50px"></img>
            </div>
           ):(
               
            <div className="CardsContainer"     >
                <h2 className="rule">Don't click on the same card twice!</h2>
                <div className="CardsContainer"> 
                {Cards.map((card,index)=>(
                    <ReactParallaxTilt> 
                    <div className="Card" onClick={PlayRound} key={index}>
                        <img src={cardBack} className="ImageTest"></img>
                    </div>
                    </ReactParallaxTilt>
                ))}
            </div>
            </div>
           )}
        </div>
         
    )

}

export default Cards