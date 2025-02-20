import { useState } from 'react'
import './App.css'

import { FaDiceOne,FaDiceTwo,FaDiceThree,FaDiceFour,FaDiceFive,FaDiceSix } from "react-icons/fa";




function App() {
  const [randomD6, setRandomD6] = useState('')
  const [randomD20, setRandomD20] = useState('')
  const [D20, setD20] = useState(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'])
  const [D6, setD6] = useState([<FaDiceOne />,<FaDiceTwo />,<FaDiceThree />,<FaDiceFour />,<FaDiceFive />,<FaDiceSix />])
  
  const gerarRandomNumber = () => {
  
  const n = Math.floor(Math.random() * D6.length) 
  
  setRandomD6(D6[n])
}

  const gerarD20 = () => {
  
  const N = Math.floor(Math.random() * D20.length) 
  
  setRandomD20(D20[N])

}

return (

  <>
     
      <div className="App"onClick={gerarRandomNumber}>
        <h2>click para gerar um d6</h2>
       <p>{randomD6}</p>
       
     
      </div>
      <div className="App"onClick={gerarD20}>     
      <h2>click para gerar um d20</h2>
         <p>{randomD20}</p> 
      </div>
  </>
)
}

export default App