// var React = require('react');
// var ReactDOM = require('react-dom');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCKIFJ5c9Oy1sLX25QJHfiPNPUrpxbZO68'; //youtube api key


//we want each video that's clicked on to be played, so we'll pass the video that's clicked on to VideoDetail
class App extends Component{ //const is es6
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
 this.videoSearch('cats')
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {  //having this inside the constructor function sets it off immediatly
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }) //if you have a key and value that are named exactly the same you can just use the one instead of both, ex: (data) <-- param {data: data} <-- prop on obj turns into {data}
      //this.setState({videos: videos}) ONLY WORKS IN E6
    });
  }

  render(){
    const videoSearch= _.debounce((term)=> { this.videoSearch(term)}, 400)
    return (
      <div className="search-bar">
      <SearchBar onSearchTermChange={videoSearch}/>

        {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)}/> */}
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}
        />
      </div>
            //{/* VideoList needs access to the videos on state here */} {/* referred to as passing props */}
    );
  }
}
//take this components html and put it on the page (in the DOM)

ReactDOM.render(<App/>, document.querySelector('.container'));
