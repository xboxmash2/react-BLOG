import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import home  from "./components/home"
import hollywood from './components/hollywood'
import bollywood from './components/bollywood'
import fitness from './components/fitness'
import food from './components/food'
import technology from './components/technology'
import { Link } from 'react-router-dom'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to ="/home">Home</Link>
        <Link to ="/hollywood">Hollywood</Link>
        <Link to ="/bollywood">Bollywood</Link>
        <Link to ="/fitness">Fitness</Link>
        <Link to ="/food">Food</Link>
        <Link to ="/technology">Technology</Link>
        


        <Routes>
          <Route path='/' element={<home/>}/>
          <Route path='/hollywood' element={<hollywood/>}/>
          <Route path='/bollywood' element={<bollywood/>}/>
          <Route path='/fitness' element={<fitness/>}/>
          <Route path='/food' element={<food/>}/>
          <Route path='/technology' element={<technology/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App