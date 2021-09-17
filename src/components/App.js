import React from 'react';
import youtube from '../api/youtube';
import Header from './Header';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

import './app.css';
import VideoDetail from './VideoDetail';

class App extends React.Component {

  state = { videos: [], selectedVideo: null }

  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
          q: term
      }
    });

    this.setState({ videos: response.data.items,  selectedVideo: response.data.items[0] })
  }


  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return(
      <div>
        <Header />
        <div className="ui container">
          <SearchBar onSubmit={ this.onSearchSubmit } />
          <div className="ui grid">
            <div className="ui row" >
              <div className="eleven wide column">
                <VideoDetail video={ this.state.selectedVideo } />
              </div>
              <div className="five wide column">
                <VideoList  videos={ this.state.videos } onVideoSelect={this.onVideoSelect}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;