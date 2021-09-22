import React, { useEffect, useState } from 'react';
import youtube from '../api/youtube';
import Header from './Header';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

import './app.css';
import VideoDetail from './VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
          q: term
      }
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }

  useEffect(() => {
    onSearchSubmit('ada cardano')
  }, [])

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  return(
    <div>
      <Header />
      <div className="container">
        <div style={{ marginBottom: '10px' }}>
          <SearchBar onSubmit={ onSearchSubmit } />
        </div>
        <div className="mt-10 ui grid">
          <div className="ui row" >
            <div className="eleven wide column">
              <VideoDetail video={ selectedVideo } />
            </div>
            <div className="five wide column">
              <VideoList  videos={ videos } onVideoSelect={onVideoSelect}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
