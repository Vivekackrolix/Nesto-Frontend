import React from "react";
import './HomeVideo.css';

const Video = () => {
    return (
        <>
            <div className='video-main-div'>
                <video
                    autoPlay muted loop
                    className="home-video"
                    src="https://nestohub.s3.ap-south-1.amazonaws.com/propertyLogo/NesToVideo.mp4"
                >
                </video>
            </div>
        </>
    );
};

export default Video;