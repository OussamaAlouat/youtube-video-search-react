import React, { useEffect, useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

import useVideos from '../hooks/useVideos';

import './app.css';
import VideoDetail from './VideoDetail';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('ada cardano');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos])

  return(
    <div>
      <Header />
      <div className="container">
        <div style={{ marginBottom: '10px' }}>
          <SearchBar onSubmit={search} />
        </div>
        <div className="mt-10 ui grid">
          <div className="ui row" >
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList  videos={ videos } onVideoSelect={setSelectedVideo}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
