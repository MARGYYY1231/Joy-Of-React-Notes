// Acceptance Criteria:

// The UI should match the screenshot above.
// No errors should be shown in the Result pane.
// No warnings should be logged in the Console pane.
// Note: the console isn't cleared automatically when the warnings are fixed. You can refresh the Preview pane with the  icon.

import React from 'react';
import { createRoot } from 'react-dom/client';

const element = (
  <form>
    <label htmlFor="search-input">
    Search:
    </label>
    <input id="search-input"/>
    <button aria-label="Submit" className="submit-btn">
      <img alt="" src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"/>
    </button>
  </form>
);

/*
Here's the raw HTML:

<form>
  <label for="search-input">Search:</label>
  <input id="search-input">
  <button aria-label="Submit" class="submit-btn">
    <img
      alt=""
      src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
    >
  </button>
</form>
*/

// const container = document.querySelector('#root');
// const root = createRoot(container);
// root.render(element);