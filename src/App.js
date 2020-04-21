import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import youtube from './api/youtube';
import {SearchBar, VideoDetail} from './components';
// import SearchBar from './components/SearchBar';
// import { row} from "react-bootstrap";

class App extends Component {
  state = {
    videos : [],
    selectedVideo: null,
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
    const {selectedVideo} =this.state;
    return (
      <div className="app-wrap">
        <SearchBar onFormSubmit= {this.handleSubmit} />
        <VideoDetail video={selectedVideo}/>
      </div>
    );
  }

}

export default App;
