import React from 'react'
import './GetStarted.css'
import arrow from '../../assest/aerrow.jpg'

export default function GetStarted(props) {
  return (
    <div className='get-started-content-wapper'>
        <div className='get-started-content'>
            <div className='row'>
                <div className='col-md-7'>
                    <h1 className='page-number'>{props.pageNumber}</h1>

                    <div className='get-started-heading-holder'>   
                                <div className='get-started-heading' >
                                 <span> <div className='heading-lines-get'></div></span><p className='get-started-headin'>{props.heading}</p>
                             </div>
                            
                        <div>
                            <h2 className='title'>{props.title}
                            <br/>{props.titleEnd}</h2>
                            <p>
                            Determining what level of hiker you are can be an important tool when 
                            <br/>planning future hikes. This hiking level guide will help you plan 
                            <br/> hikes according to different hikeratings set by various websites like All Trails and
                            <br/> Modern Hiker. What type of hiker are you – novice, moderate, advanced
                            <br/> moderate, expert, or expert backpacker? 
                            </p>
                        </div>
                        <div>
                            <p className='Learn-More '>Learn More <span><img src={arrow}/></span> </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className='img-holder'>
                    <img src={props.imgs}/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
