import React from "react";
import Logo from "../../assest/Logo.svg";
import cart from "../../assest/cart.png";
import instagram from '../../assest/instagram.png'
import twitter from '../../assest/twitter.png';
import "./home.css";
export default function Home() {
  return (
    <>
      <div className="nav-holder-wapper">
        <div className="row nav-holder-group ">
          <div className="col-md-4">
            <div className="logo">
              <img src={Logo} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="nav-group-holder">
              <ul>
                <li>Equipment</li>
                <li>About Us</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="account-nav-holder">
              <ul>
                <li>
                  <img src={cart} />
                </li>
                <li>Accout</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="body-content-wapper">
            <div className="row">
                <div className='col-md-4'>
                    <div className="imgs-social-holder">
                        <p className="follow">Follow</p>
                        <img src={instagram} className='insta'/>
                        <br/>
                        <img src={twitter}/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                    <div className='get-started-heading-home' >
                                 <span> <div className='heading-lines-hiking'></div></span><p >A Hiking guide
                                 </p>
                             </div>
                        <h2 >Be prepared for the
                            <br/> Mountains and beyond!</h2>
                            <p>Scrool down</p>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className="home-pages-number-holder">
                        <p className="start">start</p>
                        <p>01</p>
                        <p>02</p>
                        <p>03</p>

                    </div>
                </div>
            </div>

        </div>
      </div>
    </>
  );
}
