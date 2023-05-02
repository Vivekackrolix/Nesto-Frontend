import React, { useEffect } from "react";
import './HomeVideo.css';
import Aos from "aos";

const Video = () => {
    useEffect(() => {
        Aos.init({ duration: 1400 });
    }, []);

    return (
        <>
            <div className='video-main-div'>
                <video
                    autoPlay muted loop
                    className="home-video"
                    src="/assets/informative/NestohubVideo.mp4"
                >
                </video>
            </div>
        </>
    );
};

export default Video;