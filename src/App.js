import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import youtube from './api/youtube';
import {SearchBar, VideoDetail, VideoList} from './components';
// import SearchBar from './components/SearchBar';
// import { row} from "react-bootstrap";

class App extends Component {
  state = {
    videos : [],
    selectedVideo: null,
  }

  componentDidMount(){
    this.handleSubmit('reactjs tutorial')
  }

  onVideoSelect = (video) =>{
    this.setState({ selectedVideo: video})
  }
  handleSubmit = async (searchTerm) =>{
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults : 5,
        key: 'AIzaSyBr9tnVwN16RWvRjvNyUgI0hTmZL1WOYv4',
        q: searchTerm,
      }
    });
    this.setState({
      videos:response.data.items,
      selectedVideo: response.data.items[0]
    })
  }
  render(){
    const {selectedVideo, videos} =this.state;
    return (
      <div className="app-wrap">
        <SearchBar onFormSubmit= {this.handleSubmit} />
        <div className="video-wrap">

        <div className="row m-0">
        <div className="col-8"><VideoDetail video={selectedVideo}/></div>
        <div className="col-4"><VideoList videos ={videos} onVideoSelect={this.onVideoSelect}/></div>
        </div>
        </div>


      </div>
    );
  }

}

export default App;
