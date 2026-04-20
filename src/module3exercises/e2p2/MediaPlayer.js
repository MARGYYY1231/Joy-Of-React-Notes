import React from 'react';
import { Play, Pause } from 'react-feather';

import VisuallyHidden from './VisuallyHidden';

function MediaPlayer({ src }) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const audioRef = React.useRef();

  //add spacebar pause annd play
  React.useEffect(() =>{
    function spacebar(event){
      if(event.code === "Space"){
        setIsPlaying(!isPlaying);
      }
    }
    
    window.addEventListener('keydown', spacebar);

    return (() => {
      window.removeEventListener('keydown', spacebar)
    });
  }, [isPlaying]);

  //play Audio
  //Keep in sync the audio and isPlaying
  //Instead of copying this code twice. (Once in the above and once in the onClick)
  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }, [isPlaying]);

  return (
    <div className="wrapper">
      <div className="media-player">
        <img alt="" src="https://sandpack-bundler.vercel.app/img/take-it-easy.png" />
        <div className="summary">
          <h2>Take It Easy</h2>
          <p>Bvrnout ft. Mia Vaile</p>
        </div>
        <button
          onClick={() => {
            //Toggle
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? <Play /> : <Pause />}
          <VisuallyHidden>Toggle playing</VisuallyHidden>
        </button>

        <audio
          ref={audioRef}
          src={src}
          onEnded={() => {
            setIsPlaying(false);
          }}
        />
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