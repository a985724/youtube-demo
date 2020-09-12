import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="main">
      <div className="main__video">
        <iframe className="main__iframe" title={video.snippet.title} src={videoSrc} />
      </div>
      <div className="main__info">
        <h4 className="main__header">{video.snippet.title}</h4>
        <p className="main__detail">{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail;