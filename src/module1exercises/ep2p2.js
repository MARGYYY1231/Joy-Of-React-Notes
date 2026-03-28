import React from 'react';
import { createRoot } from 'react-dom/client';

function Button({buttonColor, text}){
  return (
    <button
      style={{
        border: '2px solid',
        color: buttonColor,
        borderColor: buttonColor,
        background: 'white',
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {text}
    </button>
  );
}

const root = createRoot(
  document.querySelector('#root')
);

root.render(
  <div>
    <Button buttonColor="red" text="Cancel"/>
    <Button buttonColor="black" text="Confirm"/>
  </div>
);