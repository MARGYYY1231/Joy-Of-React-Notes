import React from 'react';

/*
Here's the “pure JS” version once again:

  function pureJsVersion() {
    const wrapperElement =
      document.querySelector('.some-class');
  
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
  
      // `entry.isIntersecting` will be true if the
      // element is in the viewport, false if not.
    });
  
    observer.observe(wrapperElement);
  }

To unsubscribe, you can call:

  observer.disconnect();
*/

function useIsOnscreen(wrapperElement) {
  // TODO
  const [isVisible, setIsVisible] = React.useState(false); 

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }));
    observer.observe(wrapperElement.current);

    return (() => {
      observer.disconnect();
    });
  }, [wrapperElement]);
  return isVisible;
}

export default useIsOnscreen;

// import React from 'react';

// import useIsOnscreen from './hooks/use-is-onscreen.js';

// function App() {
//     const wrapperElement = React.useRef();
//   const isOnscreen = useIsOnscreen(wrapperElement);
  
//   return (
//     <>
//       <header>
//         Red box visible: {isOnscreen ? 'YES' : 'NO'}
//       </header>
//       <div ref={wrapperElement} className="wrapper">
//         <div className="red box" />
//       </div>
//     </>
//   );
// }

// export default App;