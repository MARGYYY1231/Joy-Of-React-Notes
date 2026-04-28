import React from 'react';
import {
  Award,
  Camera,
  Frown,
  Slash,
  XCircle,
} from 'react-feather';

import IconButton from './IconButton';

function App() {
  // TODO: Render an “IconButton
   return (
     <IconButton icon={<Frown />}>
      Rate Our Product
    </IconButton>
   )
}

export default App;