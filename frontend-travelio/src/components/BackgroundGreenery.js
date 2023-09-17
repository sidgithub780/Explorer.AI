import React from "react";
import videoBGtwo from "../assets/Greenery.mp4"

const BackgroundGreenery = () => {
    return(
        <div className='main'>
            <div className="overlay"></div>
            <video src={videoBGtwo} autoPlay loop muted
             style={{ backgroundColor: "transparent" }} 
             className="w-fit h-fit absolute inset-0 object-cover"
            ></video>
            
            <div className="content">
            </div>
        </div>
    )
}
export default BackgroundGreenery;