import React from 'react'
import VideoPlayer from 'react-video-js-player'
import Video from './video.mp4'

const HomeVideo = () => {
  const videoSrc = Video
  return (
    <div>
      <video width="100%" height="400px" src={Video} controls></video>
    </div>
  )
}

export default HomeVideo