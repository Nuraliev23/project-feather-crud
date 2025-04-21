import React from 'react'
import './footer.css'
import gmail from "./gmail.png"
import pint from "./pint.png"
import twit from "./twit.png"
import ins from "./ins.png"
import link from "./link.png"
import face from "./face.png"
import footimg from "./footimg.png"
const Pagefooter = () => {
  return (
    <div className='allfoot'>
        <div className='foots'>
            <div className="foot1">
                <p style={{fontSize:"25px"}}>Furniture</p>
                <p>Packages</p>
                <p>Living Room</p>
                <p>Bedroom</p>
                <p>Dining</p>
                <p>Home Office</p>
                <p>Decor</p>
                <p>Lighting</p>
                <p>Outdoor</p>
                <p>All Furniture</p>
                <p>Sample Sale</p>
            </div>
            <div className="foot1">
                <p style={{fontSize:"25px"}}>About</p>
                <p>How it Works</p>
                <p>About Feather</p>
                <p>Feather Furniture</p>
                <p>Reviews</p>
                <p>Feather for WeWork</p>
                <p>Feather for Business</p>
                <p>Feather for Staging</p>
                <p>Affiliate Program</p>
                <p>Careers</p>
                <p>In Your Area</p>
            </div>
            <div className="foot1">
                <p style={{fontSize:"25px"}}>Help</p>
                <p>FAQs</p>
                <p>Contact us</p>
                <p>Privacy Policy</p>
                <p>Terms</p>
                <p>FloorFound Terms</p>
            </div>

            <div className="foot2">
                <p style={{fontSize:"25px"}}>Feather on Social Media</p>
                <div className="icons">
                    <img className='ic' src={gmail} alt="" />
                    <img className='ic' src={pint} alt="" />
                    <img className='ic' src={twit} alt="" />
                    <img className='ic' src={ins} alt="" />
                    <img className='ic' src={link} alt="" />
                    <img className='ic' src={face} alt="" />
                </div>
                <p style={{fontSize:"25px"}}>Join our newsletter</p>
            </div>
        </div>
        <img style={{marginTop:"50px"}} src={footimg} alt="" />
    </div>
  )
}

export default Pagefooter