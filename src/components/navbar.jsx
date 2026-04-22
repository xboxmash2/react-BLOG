import { Link } from "react-router-dom";
import React from 'react'

import React from 'react'

const navbar = () => {
  return (
    <div>
        <Link to ="/home">Home</Link>
        <Link to ="/hollywood">Hollywood</Link>
        <Link to ="/bollywood">Bollywood</Link>
        <Link to ="/fitness">Fitness</Link>
        <Link to ="/food">Food</Link>
        <Link to ="/technology">Technology</Link>
        

    </div>
  )
}

export default navbar