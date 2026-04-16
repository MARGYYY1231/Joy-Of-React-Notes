import React from 'react';
import { Play, Pause } from 'react-feather';

import VisuallyHidden from './VisuallyHidden';

function MediaPlayer({ src }) {
  const [play, setPlay] = React.useState(false);
  const soundRef = React.useRef();
  return (
    <div className="wrapper">
      <div className="media-player">
        <img
          alt=""
          src="https://sandpack-bundler.vercel.app/img/take-it-easy.png"
        />
        <div className="summary">
          <h2>Take It Easy</h2>
          <p>Bvrnout ft. Mia Vaile</p>
        </div>
        <button
          onClick={() => {
            if(play){
              soundRef.current.play();
            }else{
              soundRef.current.pause();
            }

            setPlay(!play);
          }}
          >
          {(play) ? <Play /> : <Pause />}
          <VisuallyHidden>
            Toggle playing
          </VisuallyHidden>
        </button>
        
        <audio ref={soundRef} src={src} />
      </div>
    </div>
  );
}

export default MediaPlayer;

// const DEMO_SONG_SRC = 'https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3';

// function App() {
//   return (
//     <>
//       <MediaPlayer src={DEMO_SONG_SRC} />
//     </>
//   );
// }