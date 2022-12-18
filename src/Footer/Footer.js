import React from 'react'
import LogoText from '../assest/LogoText.png'
import  './Footer.css'
export default function Footer() {
  return (
    <>
    <div className='footer-content-wapper'>
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <h2><img src={LogoText}/></h2>
                    <p>
                    Get out there & discover your next
                    <br/> slope, mountain & destination!
                    </p>
                    <p className='terms-privacy'>Copyright 2019 MNTN, Inc. Terms & Privacy</p>
                </div>
                <div className='col-md-3'>
                    <div className='Footer-title-heading'>
                        <h4>More on The Blog</h4>
                        <p>About MNTN</p>
                        <p>Contributors & Writers</p>
                        <p>Write For Us</p>
                        <p>Contact Us</p>
                        <p>Contact Us</p>
                        
                    </div>
                </div>
                 <div className='col-md-3'>
                 <div className='Footer-title-heading'>
                        <h4>More on MNTN</h4>
                        <p>The Team</p>
                        <p>Jobs</p>
                        <p>Press</p>
                        
                        
                    </div>

                 </div>

            </div>
        </div>

    </div>
    </>
  )
}
