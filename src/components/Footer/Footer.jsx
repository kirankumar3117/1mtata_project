import React from 'react'
import styled from "./Footer.module.css"
import {FaFacebookSquare,FaTwitterSquare,FaYoutubeSquare,FaLinkedin,FaMedium,FaShieldAlt,FaLock} from "react-icons/fa"
import {MdPayments} from "react-icons/md"

const Footer = () => {
  return (
    <div>
        <br/>
        <br/>
        <div>
            <div className={styled.component1}>
                <div className={styled.component1main}>INDIAS LARGEST HEALTHCARE PLATFORM</div>
                <div className={styled.component1main1}>
                    <div>
                        <div className={styled.component1thick}>260m+</div>
                        <div>Visitors</div>
                    </div>
                    <div>
                        <div className={styled.component1thick}>31m+</div>
                        <div>Oreder Deliveries</div>
                    </div>
                    <div>
                        <div className={styled.component1thick}>1800+</div>
                        <div>Cities</div>
                    </div>
                </div>
            </div>

            <div className={styled.component2}>
            <div className={styled.component2_1}>
                <div className={styled.component2_2}>Get the link to download App</div>
                <div><input type="text" placeholder='Enter Phone Number' className={styled.component2_3}/></div>
                <div><button className={styled.component2_4}>Send Link</button></div>
            </div>
            </div>


        <div className={styled.component3}>
        <br/>
                    <br/>
            <div className={styled.component3_1}>
                <div className={styled.component3_2}>
                    
                    <div>
                        <div>Know Us</div>
                        <div id={styled.changecolor}>About Us</div>
                        <div id={styled.changecolor}>Contact Us</div>
                        <div id={styled.changecolor}>Press Coverage</div>
                        <div id={styled.changecolor}>Careers</div>
                        <div id={styled.changecolor}>Business Partnership</div>
                        <div id={styled.changecolor}>Become a Health Partner</div>
                    </div>
                    <div>
                        <div>Our Policies</div>
                        <div id={styled.changecolor}>Privacy Policy</div>
                        <div id={styled.changecolor}>Terms and Conditions</div>
                        <div id={styled.changecolor}>Editorial Policy</div>
                        <div id={styled.changecolor}>Return Policy</div>
                        <div id={styled.changecolor}>IP Policy</div>
                        <div id={styled.changecolor}>Grievence Redressal Policy</div>
                    </div>
                    <div>
                        <div>Our Services</div>
                        <div id={styled.changecolor}>Order Medicines</div>
                        <div id={styled.changecolor}>Book Lab Tests</div>
                        <div id={styled.changecolor}>Consult a Doctor</div>
                        <div id={styled.changecolor}>Ayurveda Articles</div>
                        <div id={styled.changecolor}>Hindi Articles</div>
                        <div id={styled.changecolor}>Care Plan</div>
                    </div>
                    <div>
                    <div>Connect</div>
                    <div id={styled.changecolor}>Social Links</div>
                    <div className={styled.socials}>
                        <a href="https://www.facebook.com/1mgOfficial" className={styled.socials1} target="__blank"><FaFacebookSquare size="30"/></a>
                        <a href="https://twitter.com/1mgofficial" className={styled.socials1} target="__blank"><FaTwitterSquare size="30"/></a>
                        <a href="https://www.youtube.com/c/1mgofficial" className={styled.socials1} target="__blank"><FaYoutubeSquare size="30"/></a>
                        <a href="https://www.linkedin.com/company/1mg" className={styled.socials1} target="__blank"><FaLinkedin size="30"/></a>
                        <a href="https://medium.com/1mgofficial" className={styled.socials1} target="__blank"><FaMedium size="30"/></a>
                    </div>
                </div>
                <div className={styled.downloadapp}>
                    <div>Download App</div>
                    <div>
                        <a>
                            <img src="https://imgs.search.brave.com/cpTRzecDS6n_CMTnB8nSTVwaAAmjnI2wKerD4shsW-s/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mcmVl/cG5naW1nLmNvbS9k/b3dubG9hZC9hbmRy/b2lkLzY3MDA2LWFw/cC1wbGF5LWdvb2ds/ZS1hbmRyb2lkLXN0/b3JlLWZyZWUtY2xp/cGFydC1oZC5wbmc" alt="" width="150px"/>
                        </a>
                    </div>
                    <div>
                        <a>
                            <img src="https://imgs.search.brave.com/v1OnaO6CasYUYtmT7ICdzEmgQFaTCAaQSJ51EteWWKc/rs:fit:861:333:1/g:ce/aHR0cHM6Ly9wbWlj/b2x1bWJ1c2dhLm9y/Zy9pbWFnZXMvaW1h/Z2VzL0FwcGxlLUFw/cC1TdG9yZS1sb2dv/LUZlYi0yMDE4LnBu/Zw" alt="" width="230px" style={{marginLeft:"-38px",marginTop:"-10px"}}/>
                        </a>
                    </div>
                </div>
                </div>

                

                
            </div>
            <br/>
            <br/>
            <div className={styled.component3line1}></div>
            <br/>
        </div>




        <div className={styled.component4}>
        <div className={styled.component4main}> 
            <div className={styled.component4_1}>
                    <div className={styled.component4_sub}>
                        <FaShieldAlt className={styled.component4_icons}/>
                        <div className={styled.component4_sub1}>
                            <div>Reliable</div>
                            <div className={styled.component4changecolor}>All Products displayed on Tata 1mg are procured from  verified and licensed pharmacies. All labs listed on the platform are accredited</div>
                        </div>
                    </div>
                    <div className={styled.component4_sub}>
                        <FaLock className={styled.component4_icons}/>
                        <div className={styled.component4_sub1}>
                            <div>Secure</div>
                            <div className={styled.component4changecolor}>Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and Payment Card Industry Data Security Standard (PCI DSS) complaints</div>
                        </div>
                    </div>
                    <div className={styled.component4_sub}>
                        <MdPayments className={styled.component4_icons}/>
                        <div className={styled.component4_sub1}>
                            <div>Secure</div>
                            <div className={styled.component4changecolor}>Find affordable medicne substitutes, save up to 50% on health products, up to 80% of on lab tests and free doctor consultation.</div>
                        </div>
                    </div>
            </div>
        </div>
        <br/>
        <br/>
        <div className={styled.component3line1}></div>
        <br/>
        </div>





        <div className={styled.component5}>
            <div className={styled.component5_1}>
                <div>
                    <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1580717209/URS_ebgmxc.png" alt="" />
                </div>
                <div>
                    India's only LegitScript ans IOS/ IES 27001 certified online healthcare platform
                </div>

            </div>
            <br/>
        </div>




        <div className={styled.finalcomponent}>
            <div className={styled.finalcomponent_1}>
            © 2022 Tata 1mg. All rights reserved. In compliance with Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't process requests for Schedule X and other habit forming drugs.
            </div>
            <div className={styled.finalcomponent_2}>
            <img src="https://imgs.search.brave.com/vU8OvT0KJSgnzWyx9yX-MFA30ryYB9oO5Y3w7W-yXBs/rs:fit:717:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/ZU9sZ1F2MGlYMmxV/UnNuZGJiWHpnSGFF/NSZwaWQ9QXBp" alt="" />
            </div>
        </div>



        </div>
    </div>
  )
}

export default Footer