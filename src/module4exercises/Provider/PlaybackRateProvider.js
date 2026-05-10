import React from 'react';

export const PlaybackRateContext = React.createContext();

function PlaybackRateProvider({ children }) {
  // TODO
  const [playbackRate, setPlaybackRate] = React.useState(1);
  const resetPlaybackRate = React.useCallback(() => {
    setPlaybackRate(1);
  }, []);

  return (
    <PlaybackRateContext.Provider
          value={{
            playbackRate,
            setPlaybackRate,
            resetPlaybackRate,
          }}
        >
      {children}
    </PlaybackRateContext.Provider>
  );
}

export default PlaybackRateProvider;