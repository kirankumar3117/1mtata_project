import React from 'react'
import styled from './Login.module.css'
import { useState, useEffect, useRef } from 'react'
import { authentication } from './firebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { LoginSlider } from './LoginSlider'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { set_login_state } from '../../store/LoginState/LoginState.action'
import { user_state } from '../../store/User/User.action'
const Login = () => {
  const {state}=useSelector((state)=>state.setloginstate);
  const {userState}=useSelector((state)=> state.user);
  const [user, setUser] = useState(false)
  const [number, setNumber] = useState({})
  const [activateOtpPage,setActivateOtpPage]=useState(false);
  const [validnumber,setValidnumber]=useState(false);
  const [validotp,setValidotp]=useState(false);
  const [loginSuccessfull,setLoginSuccessfull]=useState(false);
  const handlechange = (e) => {
    const { name, value } = e.target
    setNumber({
      [name]: value,
    })
  }

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
        defaultCountry: 'IN',
      },
      authentication,
    )
  }
   const [loginLoading,setLoginLoading]=useState(false)
  const handlesubmit = (e) => {
    setLoginLoading(true)
    // setInterval(()=>{
    //   setActivateOtpPage(true);
    //   setLoginLoading(false)
    // },2000)
    e.preventDefault()
    generateRecaptcha()
    const phoneNumber = `+91${number.mobile}`
    const appVerifier = window.recaptchaVerifier

    const auth = authentication
    console.log(phoneNumber, appVerifier, auth)
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult
        console.log('otp sented')
        setActivateOtpPage(true)

        
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error)
        
        setValidnumber(true)
        setLoginLoading(false)
      })
  }
  const [otp, setOtp] = useState("")
  const handleotp = (e) => {
    setLoginLoading(false)
    let OTP = e.target.value
    setOtp(OTP)
  }
  useEffect(() => {
    let confirmationResult = window.confirmationResult
    if (otp.length == 6) {
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user
          console.log(user)
          setUser(true)
          setLoginSuccessfull(true)
          setTimeout(() => {
            dispatch(set_login_state(!state))
          }, 2000);
          dispatch(user_state(true))
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          setValidotp(true);
        })
    }
  }, [otp])
 
  const mainRef = useRef()
  useEffect(() => {}, [])

  const dispatch = useDispatch()
  const { state: loginstate } = useSelector((state) => state.setloginstate)
  
  return (
    
    <div className={styled.overlay}>
      {loginSuccessfull ? <div className={styled.loginbox}>
        <h2 className={styled.loginbox_1}>Login</h2>
        <div> <img src="https://imgs.search.brave.com/8_IuZFcKm397uKE5G1I9JSlXKcXU1-yEL2oAYLgxe6Y/rs:fit:480:354:1/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS83/MDMwMWZlNWJhNTFl/MmE3NTFhZmM1Zjk1/NmFlYzk5ZDg4NDUw/ODQyLzY4NzQ3NDcw/NzMzYTJmMmY2ZDY1/NjQ2OTYxMmU2NzY5/NzA2ODc5MmU2MzZm/NmQyZjZkNjU2NDY5/NjEyZjc1NDQ3NTQ2/NTg1MzQ5NGE2NzY2/Mzg2MzY3MmY2NzY5/NzA2ODc5MmU2NzY5/NjY" alt=""  className={styled.loginimage}/> </div>
      </div> :
      <div className={styled.container} ref={mainRef}>
        <div className={styled.slidercontainer}>
          <div className={styled.slidermain}>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay
              autoPlaySpeed={50}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              customTransition="all 1s linear"
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
              renderDotsOutside={true}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 1,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 0,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
              transitionDuration={5000}
            >
              {LoginSlider.map((e) => {
                return (
                  <div>
                    <div>
                      <img src={e.img} alt="" className={styled.imageslider} />
                    </div>
                    <div className={styled.imagetag}>{e.tag}</div>
                    <div className={styled.slidersummary}>{e.summary}</div>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
        <div className={styled.middleline}></div>
        <div className={styled.login}>
          <div
            className={styled.loginremove}
            onClick={() => {
              dispatch(set_login_state(false))
            }}
          >
            x
          </div>
          <div className={styled.login_main}>
            <div className={styled.LoginSignUp}>Login | SignUp</div>
            <div className={` data-auto-dismiss="2000"  ${styled.logindisctription}`}>
              Get access to your orders,lab tests & doctor consultations
            </div>
           
            <div className={styled.formopen}>
              <form action="" onSubmit={(e) => handlesubmit(e)}>
                <div id="sign-in-button"></div>
                {activateOtpPage ? <div>
                  <input
                  // defaultValue={Enter otp}
                  type="text"
                  // name="otp"
                  value={otp}
                  onChange={(e)=>handleotp(e)}
                  className={styled.forminput}
                  placeholder="Enter Your 6 Digit OTP"
                  maxLength={6}
                />
                 <div className={styled.inputline}></div>
                 {validotp ? <div className={styled.validnumber}>! Enter a valid OTP</div> :null}
                 <input
                  type="submit"
                  value="SUBMIT"
                  className={styled.otpbutton}
                />
                </div>
                :
                <div>
                <input
                  type="text"
                  name="mobile"
                  onChange={(e) => handlechange(e)}
                  className={styled.forminput}
                  placeholder="Enter Your 10 Digit Mobile Number"
                  value={number.mobile}
                />
                <div className={styled.inputline}></div>
                {validnumber ? <div className={styled.validnumber}>! Enter a valid mobile number</div> :null}
                
              
                {loginLoading ? <div className={styled.loginLoading}>SEND OTP
                <div className={`spinner-border ${styled.loginLoading_1}`} role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                </div> : <input
                  type="submit"
                  value="SEND OTP"
                  className={styled.otpbutton}
                /> }
                </div>}
                <div className={styled.agreement}>
                  By logging in, you agree to our Terms and Conditions & Privacy
                  Policy
                </div>
              </form>
              {/* <input type="text" onChange={(e)=>handleotp(e)}/> */}
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Login
