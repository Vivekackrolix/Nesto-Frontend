import React, { useState } from "react";
import './HomeVideo.css';
import { AiFillPlayCircle } from "react-icons/ai";

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
                {play ? <AiFillPlayCircle className="play-button"></AiFillPlayCircle> : ""}
                <video onPlay={handleClick} onPause={handlePause} controls autoPlay muted className="home-video">
                    <source src={"/assets/informative/NestoHubVideo.mp4"} style={{ width: '100%' }} />
                </video>
            </div>
            <br /><br /><br />
        </>
    );
};

export default Video;
