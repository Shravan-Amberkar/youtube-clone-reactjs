import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const  VideoDetail = ({ video }) =>{
  if(!video) return <div> Loading ... </div>

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <React.Fragment>
    <div className = "video-iframe">
    <iframe frameBorder= "0" height = "100%" width = "100%" title= "Video Player" src = {videoSrc} />
    </div>
    <div className = "video-iframe-text-content">
    <div className = "video-iframe-text-1">{video.snippet.title} - {video.snippet.channelTitle}</div>
    <div className = "video-iframe-text-2">{video.snippet.description} </div>
    
    </div>
    </React.Fragment>

  )
}

export default VideoDetail;
