import { useState } from 'react'
import Top from './Top'
import Cards from './Cards'
  

function App() {

  const[Score,setScore] =  useState(0);
  const[bestScore,setBestScore] = useState(0);

  return (
     
      <div className='GameContainer'>
        <Top Score={Score} bestScore={bestScore}></Top>
        <Cards Score={Score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}> </Cards>
      </div>
    
   
  )
}

export default App
