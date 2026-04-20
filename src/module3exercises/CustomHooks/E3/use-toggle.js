import React from 'react';

function useToggle(initialValue = false) {
  // TODO: Fill me in!
  if (
    typeof initialValue !== 'boolean' &&
    typeof initialValue !== 'function'
  ) {
    console.warn('Invalid type for useToggle');
  }

  const [value, setValue] = React.useState(
    initialValue
  );

  function toggleValue() {
    setValue((currentValue) => !currentValue);
  }

  return [value, toggleValue];
}

export default useToggle;


// import React from 'react';

// import useToggle from './hooks/use-toggle'
// import Clock from './Clock'

// function App() {
//   // TODO: Replace this with “useToggle”!
//   const [
//     showClock,
//     toggleClock
//   ] = useToggle(true);
  
//   return (
//     <>
//       <button
//         className="clock-toggle"
//         onClick={toggleClock}
//       >
//         {showClock ? 'Clock ON' : 'Clock OFF'}
//       </button>
      
//       {showClock && <Clock />}
//     </>
//   );
// }

// export default App;