import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { get_indual_item } from '../../store/IndividualPage/IndividualPage.action'

const Individualitem = () => {
    const {name,id}=useParams()
    const {data,loading}=useSelector((state)=>state.individualitempage)
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(get_indual_item(id))
    },[id])
  return (
    <div>
     {loading ? <h1>Loading...</h1>: data.name}
    </div>
  )
}

export default Individualitem