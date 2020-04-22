import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoItem = ({video , onVideoSelect}) => {

  return (
  <div className="col-12">
  <div className="youtube-cards shadow" onClick ={() => onVideoSelect(video)}>
  <div className="row">
  <div className="col-6">
  <div className="youtube-cards-thumbnail">
  <img alt="thumbnail" src = {video.snippet.thumbnails.default.url} />
  </div>
  </div>
  <div className="col-6">
  <div className="youtube-cards-title">
   {video.snippet.title}
  </div>
  </div>
  </div>

  </div>
  </div>

  )
}
export default VideoItem;
