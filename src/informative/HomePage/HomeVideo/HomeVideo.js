import React, { useState, useEffect } from "react";
import './HomeVideo.css';
import { AiFillPlayCircle } from "react-icons/ai";
import Aos from "aos";

const Video = () => {
    const [play, setPlay] = useState(true);
    function handleClick() {
        setPlay(false);
    }
    function handlePause() {
        setPlay(true);
    }
    useEffect(() => {
        Aos.init({ duration: 1400 });
    }, []);

    return (
        <>
            {/* <div className={`video-main ${play === true ? 'video-main-before' : 'video-main'}`} data-aos='fade-up'> */}
            <div className={`video-main-div ${play === true ? 'video-main-div-before' : ''}`}>
                {play ? <AiFillPlayCircle className="play-button"></AiFillPlayCircle> : ""}
                <video
                    onPlay={handleClick}
                    onPause={handlePause}
                    controls autoPlay muted
                    className="home-video"
                    // data-aos='fade-up'
                    src="/assets/informative/NestohubVideo.mp4"
                >
                    {/* <source src="/assets/informative/NestoHubVideo.mp4" className="home-video-source" /> */}
                </video>
            </div>
            <br /><br /><br />
        </>
    );
};

export default Video;
