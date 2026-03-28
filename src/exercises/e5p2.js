import { range } from './utils';

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {/* TODO */
      range(numRows).map(r => (
        <div key={r} className="row">
        {range(numCols).map(c =>(
          <div key={c} className="cell"></div>
        ))}
          </div>
      ))
      }
    </div>
  );
}

function App() {
  return (
    <Grid
      numRows={8}
      numCols={6}
    />
  );
}

export default App;