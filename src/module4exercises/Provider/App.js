import React from 'react';

import Homepage from './Homepage';
import UserProvider from './UserProvider';
import ThemeProvider from './ThemeProvider';
import PlaybackRateProvider from './PlaybackRateProvider';

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <PlaybackRateProvider>
          <Homepage />
        </PlaybackRateProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;