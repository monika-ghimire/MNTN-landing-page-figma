import React from 'react'
import './Hiking.css'
import second from '../../assest/second.png'
import arrow from '../../assest/aerrow.jpg'
export default function Hiking() {
  return (
    <div className='get-started-content-wapper'>
        <div className='get-started-content'>
            <div className='row'>
                
                <div className='col-md-5 img-holder-for-top'>
                    <div className='img-holder-hiking'>
                    <img src={second}/>
                    </div>
                    
                </div>
                <div className='col-md-7 text-holder'>
                    <h1 className='page-number-hiking'>02</h1>

                    <div className='get-started-heading-holder'>   
                                <div className='get-started-heading' >
                                 <span> <div className='heading-lines'></div></span><p >Hiking Essentials
                                 </p>
                             </div>
                            
                        <div>
                            <h2 className='title'>
                            What level of hiker
                                    <br/> are you?
                            </h2>
                            <p>
                            Determining what level of hiker you are can be an important tool when 
                            <br/>planning future hikes. This hiking level guide will help you plan 
                            <br/> hikes according to different hikeratings set by various websites like All Trails and
                            <br/> Modern Hiker. What type of hiker are you – novice, moderate, advanced
                            <br/> moderate, expert, or expert backpacker? 
                            </p>
                        </div>
                        <div>
                            <p className='Learn-More '>Learn More <span><img src={arrow}/></span>  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
