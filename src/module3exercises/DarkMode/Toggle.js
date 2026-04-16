import React from 'react';
import styles from './Toggle.module.css';

function Toggle({
  label,
  checked,
  handleToggle,
  backdropColor = 'white',
  size = 16,
}) {
  const padding = size * 0.1;
  const width = size * 2 + padding * 2;

  const wrapperStyle = {
    width,
    padding,
    '--radius': size * 0.25 + 'px',
    '--backdrop-color': backdropColor,
  };

  const ballStyle = {
    width: size,
    height: size,
    transform: checked ? `translateX(100%)` : `translateX(0%)`,
  };

  //Create Unique Toggle ID.
  const id = React.useId();
  const toggleID = `${id}-toggle`;
  
  return (
    <div className={styles.wrapper}>
      <label htmlFor={toggleID}>
        {label}
      </label>
      <button
        id={toggleID}
        className={styles.toggle}
        type="button"
        aria-pressed={checked}
        style={wrapperStyle}
        onClick={() => {
          handleToggle(!checked)
        }}
      >
        <span className={styles.ball} style={ballStyle} />
      </button>
    </div>
  );
};

export default Toggle;


/*
Local Storage cheatsheet:

// To save an item:
window.localStorage.setItem('is-dark-mode', true);

// To retrieve the value:
JSON.parse(window.localStorage.getItem('is-dark-mode'));
*/

// import React from 'react';

// import Toggle from './Toggle';

// function App() {
//   const [isDarkMode, setIsDarkMode] = React.useState(() => {
//     const storedValue = window.localStorage.getItem('is-dark-mode');
//     return JSON.parse(storedValue) || false
//   });
//   React.useEffect(() => {
//     window.localStorage.setItem('is-dark-mode', isDarkMode);
//     window.localStorage.setItem('is-dark-mode', isDarkMode);
//   }, [isDarkMode]);

//   return (
//     <div
//       className="wrapper"
//       style={{
//         // NOTE: This is a just-for-fun mini demo, not a
//         // full-featured Dark Mode implementation!
//         '--color-bg': isDarkMode ? 'black' : 'white',
//         '--color-text': isDarkMode ? 'white' : 'black',
//       }}
//     >
//       <Toggle
//         label="Dark Mode"
//         checked={isDarkMode}
//         handleToggle={setIsDarkMode}
//       />
//     </div>
//   );
// }

// export default App;