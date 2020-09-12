import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="item" >
      <img className="item__image" alt={video.snippet.title} src={video.snippet.thumbnails.default.url} />
      <div className="item__content">
        <h3 className="item__header">{video.snippet.title}</h3>
        <div className="item__description">{video.snippet.channelTitle}</div>
      </div>
    </div>
  )
}

export default VideoItem;