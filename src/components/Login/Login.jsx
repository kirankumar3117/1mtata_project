import React from 'react'
import styled from "./Login.module.css"
import {useState,useEffect} from "react"
import { authentication } from './firebase'
import {  RecaptchaVerifier , signInWithPhoneNumber} from "firebase/auth";
const Login = () => {
    const [user,setUser]=useState(false)
    const [number,setNumber]=useState({})
    const handlechange=(e)=>{
       const {name,value}=e.target;
        setNumber({
            [name]:value
        })
       
    }

    const generateRecaptcha=()=>{
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
            },
            defaultCountry:"IN"
          }, authentication);
    }


    const handlesubmit=(e)=>{
        e.preventDefault()
          generateRecaptcha()
          const phoneNumber = `+91${number.mobile}`
          const appVerifier = window.recaptchaVerifier;
          
          const auth = authentication;
          console.log(phoneNumber,appVerifier,auth)
          signInWithPhoneNumber(auth, phoneNumber, appVerifier)
              .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // console.log("otp sented")
                // ...
              }).catch((error) => {
                // Error; SMS not sent
                // ...
                console.log(error)
              });
    }
const [otp,setOtp]=useState(0)
    const handleotp=(e)=>{
        let OTP=e.target.value
        setOtp(OTP)
  
    }
    useEffect(()=>{
        let confirmationResult= window.confirmationResult;
        if(otp.length==6){
         confirmationResult.confirm(otp).then((result) => {
             // User signed in successfully.
             const user = result.user;
             setUser(true)
             // ...
           }).catch((error) => {
             // User couldn't sign in (bad verification code?)
             // ...
           });
        }
    },[otp])
  return (
    <div>
    <div className={styled.container}>
    <div className={styled.login}>
        {user ? <div><h1>Hello</h1></div> :
        <div>
        <form action="" onSubmit={(e)=>handlesubmit(e)}>
            <div id="sign-in-button"></div>
            <label>Login</label>
            <input type="text" name="mobile" onChange={(e)=>handlechange(e)} />
            <input type="submit" />
        </form>
        <input type="text" onChange={(e)=>handleotp(e)}/>
       </div>
        }
    </div>
    </div>
    </div>
  )
}

export default Login