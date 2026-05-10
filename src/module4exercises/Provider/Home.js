import React from 'react';

import { UserContext } from './UserProvider';
import { ThemeContext } from './ThemeProvider';
import { PlaybackRateContext } from './PlaybackRateProvider';

function Homepage() {
  const { user } = React.useContext(UserContext);
  const { theme } = React.useContext(ThemeContext);
  const { playbackRate } = React.useContext(PlaybackRateContext);
  
  return (
    <>
      <p>User: {user ? user.email : 'None'}</p>
      <p>Theme: {theme}</p>
      <p>Playback Rate: {playbackRate}x</p>
    </>
  );
}

export default Homepage;