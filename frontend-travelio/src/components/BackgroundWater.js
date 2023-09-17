import React from "react";
import videoBGthree from "../assets/water.mp4"

const BackgroundWater = () => {
    return(
        <div className='main'>
            <div className="overlay"></div>
            <video src={videoBGthree} autoPlay loop muted
             style={{ backgroundColor: "transparent" }} 
             className="w-fit h-fit absolute inset-0 object-cover"
            ></video>
            </div>
    )
}
export default BackgroundWater;