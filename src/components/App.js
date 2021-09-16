import React from 'react';
import youtube from '../api/youtube';
import Header from './Header';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

import './app.css';

class App extends React.Component {

  state = { videos: [], selectedVideo: null }

  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
          q: term
      }
    });

    this.setState({ videos: response.data.items })
  }


  onVideoSelect = (video) => {
    console.log('From the app', video);
  }

  render() {
    return(
      <div>
        <Header />
        <div className="container">
          <SearchBar onSubmit={this.onSearchSubmit} />

          <VideoList  videos={ this.state.videos } onVideoSelect={this.onVideoSelect}/>
        </div>
      </div>
    );
  }
}

export default App;