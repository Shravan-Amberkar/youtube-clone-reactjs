import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const  VideoDetail = ({ video }) =>{
  if(!video) return <div> Loading ... </div>

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <React.Fragment>
    <div className = "video-iframe">
    <iframe frameborder= "0" height = "100%" title= "Video Player" src = {videoSrc} />
    </div>
    <div className = "video-iframe-text-content">
    <div>{video.snippet.title} - {video.snippet.channelTitle}</div>
    <div>{video.snippet.description} </div>
    <div>{video.snippet.channelTitle}</div>
    </div>
    </React.Fragment>

  )
}

export default VideoDetail;
