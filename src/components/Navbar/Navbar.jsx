import React from 'react'
import styled from "./Navbar.module.css"
import {useState} from "react"
import {BsCart3} from "react-icons/bs"
import Login from '../Login/Login'

const Navbar = () => {
  const navobj=[
    {
      "id":1,
      "name":"MEDICINES",
      "status":true
    },
    {
      "id":2,
      "name":"LAB TESTS",
      "status":false
    },
    {
      "id":3,
      "name":"CONSULT DOCTORS",
      "status":false
    },
    {
      "id":4,
      "name":"COVID-19",
      "status":false
    },
    {
      "id":5,
      "name":"AYURVEDA",
      "status":false
    },
    {
      "id":6,
      "name":"CARE PLAN",
      "status":false
    }
  ]
  const [navdata,setNavdata]=useState(navobj)
const handlenavtheme=(id)=>{
  navdata.map(e=>{
    return (id==e.id ? e.status=true : e.status=false)
  })
  setNavdata([...navdata])
}



  return (
    <div>
    <div className={styled.Navbar}>
      <div className={styled.Navbar1}>
        <div>
        <img alt="TATA 1mg" src="https://www.1mg.com/images/tata_1mg_logo.svg" width="100px" className={styled.navimage}/>
        </div>
     {navdata.map(e=>{
      return <div key={e.id} className={ e.status==true ? styled.navcolortheme : styled.hovereffect} onClick={()=>{handlenavtheme(e.id)}}>{e.name}</div>
     })}
       <div className={styled.savemore}>SAVE MORE</div>
      </div>
      <div className={styled.Navbar2}>
        <div className={styled.loginsignup}><div>Login</div> | <div>Sign Up</div></div>
        <div>offers</div>
        <div className={styled.carticon}><BsCart3 size="20  "/></div>
        <div>Need Help?</div>
      </div>
     
    </div>
    <div className={styled.login_user}>
        <Login/>
      </div>
    </div>
  )
}

export default Navbar