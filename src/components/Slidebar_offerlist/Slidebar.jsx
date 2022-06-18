import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { slidebar_image_change } from '../../store/slidebar/slidebar.action'
import { slidebardata } from '../../store/slidebar/slidebardata'


import styled from "./slidebar.module.css"

const Slidebar = () => {
    const [change,setChange]=useState(0)
    const {id}=useSelector((state)=>state.slidebar)
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(slidebar_image_change())
    },[])
  return (
    <div>
        <div className={styled.main}>
            <div className={styled.sliderimage}>
                {slidebardata.map(e=>{
                    return (e.id===id ? <div className={styled.imageslider}>
                        <img src={e.img} alt="img"/>
                    </div> : null)
                })}
            </div>
            <div>
                <img src="https://onemg.gumlet.io/image/upload/w_480,h_200,,a_ignore,q_auto,f_auto/v1637650231/j1stwu7s3rtmyi8r5ruv.png" alt="img" className={styled.slider3}/>
            </div>
        </div>

        <div>
            <div className={styled.slider2}>
                <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" alt=""  className={styled.slider1}/>
            </div>
        </div>
        
    </div>
  )
}

export default Slidebar