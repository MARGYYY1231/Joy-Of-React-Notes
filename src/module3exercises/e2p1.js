import React from 'react';

function VideoPlayer({ src, caption }) {
  const playbackRateSelectId = React.useId();
  const videoRef = React.useRef();
  
  return (
    <div className="video-player">
      <figure>
        <video
          controls
          src={src}
          ref={videoRef}
        />
        <figcaption>
          {caption}
        </figcaption>
      </figure>
      
      <div className="actions">
        <label htmlFor={playbackRateSelectId}>
          Select playback speed:
        </label>
        <select
          id={playbackRateSelectId}
          defaultValue="1"
          onChange={event => {playSpeed(videoRef.current, event.target.value)}}
        >
          <option value="0.5">0.5</option>
          <option value="1">1</option>
          <option value="1.25">1.25</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
}

function playSpeed(video, speed){
  video.playbackRate = speed;
}

function App() {
  return (
    <main>
      <VideoPlayer
        src="https://sandpack-bundler.vercel.app/videos/snowstorm.mp4"
        caption="Snow falls by a pine tree and house"
      />
      <dl>
        <dt>Filmed by</dt>
        <dd>Karolina Grabowska</dd>
        <dt>Licensed under</dt>
        <dd>Creative Commons Zero (CC0)</dd>
      </dl>
    </main>
  );
}

export default VideoPlayer;