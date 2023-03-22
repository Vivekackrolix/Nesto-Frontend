import React, { useState, useEffect } from "react";
import './HomeVideo.css';

const Video = () => {
    const [play, setPlay] = useState(true);
    function handleClick() {
        setPlay(false);
    }
    function handlePause() {
        setPlay(true);
    }

    return (
        <>
            <br /><br />
            <div className="w-full video-main" data-aos='fade-up'>
                {play ? <img className="play-button" src="/assets/informative/nestoplay.png" /> : ""}
                <video onPlay={handleClick} onPause={handlePause} controls className="home-video">
                    <source src={"/assets/dummyVideo.mp4"} />
                </video>
            </div>
            <br /><br /><br />
        </>
    );
};

export default Video;
