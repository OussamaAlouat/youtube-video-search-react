import React from 'react';

const VideoList = (props) => {
  const { videos } = props;
  return <div>Video List {videos.length} </div>
}

export default VideoList;