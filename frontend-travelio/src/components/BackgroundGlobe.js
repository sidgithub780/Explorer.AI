
import React from "react";
import videoBGone from '../assets/globe.mp4'


const BackgroundGlobe = () => {
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={videoBGone} autoPlay loop muted
             style={{ backgroundColor: "transparent" }} 
             className="w-fit h-fit absolute inset-0 object-cover"
            ></video>
            
            <div className="content">
            </div>
        </div>
    )
}
export default BackgroundGlobe;
