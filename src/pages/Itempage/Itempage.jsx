import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Itempage = () => {
  const [data,setData]=useState([])
   useEffect(()=>{
      axios.get("https://tatadata.herokuapp.com/data").then((res)=> setData(res.data))
   },[])
  return (
    <div>
      <Carousel
  additionalTransfrom={0}
  arrows  
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 7,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={7}
  swipeable
>
  {data.map((e)=> <div ><img src={e.img} width="120px"/></div>)}
</Carousel>
    </div>
  )
}

export default Itempage