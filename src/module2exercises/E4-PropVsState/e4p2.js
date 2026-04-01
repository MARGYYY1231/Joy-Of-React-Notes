import React from 'react';

function App() {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#FF0040',
    '#FF0040',
    '#FF0040',
    '#FF0040',
  ]);

  const [numVisableColors, setNumVisableColors] =
    React.useState(2);

  const visableColors = colors.slice(
    0,
    numVisableColors
  );

  const colorStops = visableColors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  function addColor() {
    if (visableColors.length >= 5) {
      window.alert('There is a maximum of 5 colors');
      return;
    }

    setNumVisableColors(numVisableColors + 1);
  }
  function removeColor() {
    if (visableColors.length <= 2) {
      window.alert('There is a minimum of 2 colors');
      return;
    }

    setNumVisableColors(numVisableColors - 1);
  }

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={removeColor}>
          Remove color
        </button>
        <button onClick={addColor}>Add color</button>
      </div>

      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <div className="colors">
        {visableColors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div
              key={colorId}
              className="color-wrapper"
            >
              <label htmlFor={colorId}>
                Color {index + 1}:
              </label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={(event) => {
                    let newCols = [...colors];
                    newCols[index] =
                      event.target.value;
                    setColors(newCols);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;