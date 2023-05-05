import React from "react";
import './HomeVideo.css';

const Video = () => {
    return (
        <>
            <div className='video-main-div'>
                <video
                    autoPlay muted loop
                    className="home-video"
                    src="/assets/informative/NestoVideo.mp4"
                >
                </video>
            </div>
        </>
    );
};

export default Video;