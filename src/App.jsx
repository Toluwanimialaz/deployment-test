import { useState,useEffect } from 'react'
import './App.css'
import Card from './components/Card/';
import Characters from '../characterData.json'

function App() {
  const [stuff, setStuff] = useState([])

  useEffect(()=>{
    setStuff(Characters)
    console.log(Characters)
  },[])

  return (
    <div className="container">
      <div className='row'>
      {stuff.map((props)=>(
        <div className='col-3' key={props._id}>
          <Card  props={props}/>
        </div>
      ))}
      </div>
      

    </div>
  )
}

export default App
