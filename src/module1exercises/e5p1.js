import React from 'react';

import { range } from './utils';

function Graph({ from, to }) {
  return (
    <div className="graph">
      {range(from, to+1, 10).map(num => (
        <div key={num} className="peg">{num}</div>
      ))}
    </div>
  );
}

// function App() {
//   return (
//     <Graph
//       from={0}
//       to={40}
//     />
//   );
// }

// export default App;