import React from 'react'
import { useParams } from 'react-router-dom'

const Itempage = () => {
    const {name}=useParams()
    console.log(name)
    
  return (
    <div>Itempage</div>
  )
}

export default Itempage