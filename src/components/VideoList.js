import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoItem from './VideoItem';

const VideoList = ( { videos,onVideoSelect  }) => {
  const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)
  return listOfVideos
}
export default VideoList;
