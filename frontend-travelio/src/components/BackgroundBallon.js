import React from "react";
import videoBGfour from "../assets/balloon.mp4"

const BackgroundBalloon = () => {
    return(
        <div className='main'>
            <div className="overlay"></div>
            <video src={videoBGfour} autoPlay loop muted
             style={{ backgroundColor: "transparent" }} 
             className="w-fill h-fill absolute inset-0 object-cover"
            ></video>
        </div>
    )
}
export default BackgroundBalloon;