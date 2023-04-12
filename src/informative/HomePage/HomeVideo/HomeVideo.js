import React, { useState } from "react";
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
            <div className="video-main" data-aos='fade-up'>
                {play ? <img className="play-button" alt="play" src="/assets/informative/videoPlay.svg" /> : ""}
                <video onPlay={handleClick} onPause={handlePause} controls className="home-video">
                    <source src={"/assets/dummyVideo.mp4"} style={{ width: '100%' }} />
                </video>
            </div>
            <br /><br /><br />
        </>
    );
};

export default Video;
