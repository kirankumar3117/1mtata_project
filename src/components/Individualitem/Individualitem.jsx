import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Individualitem = () => {
    const {name,_id}=useParams()
    console.log(name)
    useEffect(()=>{
        if(name && _id){

        }
        else if(name){

        }
    },[name,_id])
  return (
    <div>{name}</div>
  )
}

export default Individualitem