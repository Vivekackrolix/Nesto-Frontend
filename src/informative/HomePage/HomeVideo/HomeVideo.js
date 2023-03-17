import React, { useState, useEffect } from "react";
import './HomeVideo.css';

const Video = () => {
const [play,setPlay]=useState(true);
function handleClick(){
    setPlay(false);
}
function handlePause(){
    setPlay(true);
}

    return (
        <div className="w-full video-main my-5">

        {play?<img  className="play-button" src="/assets/nestoplay.png" alt="play-button" />:""}
            <video onPlay={handleClick} onPause={handlePause}  controls autoPlay className="w-full">
                <source src={"/assets/dummyVideo.mp4"} />
            </video>
        </div>
    );
};

export default Video;
