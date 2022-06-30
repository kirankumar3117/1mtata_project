import React from 'react'
import styled from './Navbar.module.css'
import { useState,useRef } from 'react'
import { BsCart3 } from 'react-icons/bs'
import Login from '../Login/Login'
import { useEffect } from 'react'
import { set_login_state } from '../../store/LoginState/LoginState.action'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { get_all_users } from '../../store/User/User.action'
import {BsPerson} from "react-icons/bs";
const Navbar = () => {
  // const [loginstate,setLoginstate]=useState(false)
  const dispatch = useDispatch()
  const { state: loginstate } = useSelector((state) => state.setloginstate)
  const {userState}=useSelector((state)=> state.user);
  const navobj = [
    {
      id: 1,
      name: 'MEDICINES',
      status: true,
    },
    {
      id: 2,
      name: 'LAB TESTS',
      status: false,
    },
    {
      id: 3,
      name: 'CONSULT DOCTORS',
      status: false,
    },
    {
      id: 4,
      name: 'COVID-19',
      status: false,
    },
    {
      id: 5,
      name: 'AYURVEDA',
      status: false,
    },
    {
      id: 6,
      name: 'CARE PLAN',
      status: false,
    },
  ]
  const [navdata, setNavdata] = useState(navobj)
  const handlenavtheme = (id) => {
    navdata.map((e) => {
      return id == e.id ? (e.status = true) : (e.status = false)
    })
    setNavdata([...navdata])
  }
const loginRef=useRef();
  useEffect(() => {
   
    
    const closeLogin=(e)=>{
      console.log("eeeeeeeeeeeeee", e)
      if(e.patch[0]!== loginRef.current){
        dispatch(set_login_state(false))
      }
    }
    document.addEventListener('click',closeLogin);

    return ()=> document.removeEventListener('click',closeLogin)
   
   
  }, [])

  return (
    <div>
      <div className={styled.Navbar}>
        <div className={styled.Navbar1}>
          <div>
            <img
              alt="TATA 1mg"
              src="https://www.1mg.com/images/tata_1mg_logo.svg"
              width="100px"
              className={styled.navimage}
            />
          </div>
          {navdata.map((e) => {
            return (
              <div
                key={e.id}
                className={
                  e.status == true ? styled.navcolortheme : styled.hovereffect
                }
                onClick={() => {
                  handlenavtheme(e.id)
                }}
              >
                {e.name}
              </div>
            )
          })}
          <div className={styled.savemore}>SAVE MORE</div>
        </div>
        <div className={styled.Navbar2}>
         {userState==false ?  <div className={styled.loginsignup}>
            <div
              onClick={()=>{
                loginstate == true
                  ? dispatch(set_login_state(false))
                  : dispatch(set_login_state(true))
              }}
              ref={loginRef}
            >
              Login
            </div>{' '}
            |{' '}
            <div
              onClick={()=>{
                loginstate == true
                  ? dispatch(set_login_state(false))
                  : dispatch(set_login_state(true))
              }}
              ref={loginRef}
            >
              Sign Up
            </div>
          </div> : <div><BsPerson size="20"/></div>}
          <div>offers</div>
          <div className={styled.carticon}>
            <BsCart3 size="20  " />
          </div>
          <div>Need Help?</div>
        </div>
      </div>
      <div>{loginstate === true ? <Login /> : null}</div>
    </div>
  )
}

export default Navbar
