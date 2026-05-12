import React from 'react';
import { X as Close } from 'react-feather';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

import styles from './Drawer.module.css';

function Drawer({ handleDismiss, children }) {
  return (
    // ADD REMOVESCROLL AND FOCUS
    <FocusLock>
      <RemoveScroll>
        <div className={styles.wrapper}>
            {/* when click div closes menu */}
          <div className={styles.backdrop} onClick={handleDismiss}/>
          <div className={styles.drawer}>
            <div>
              {children}
            </div>
            <button
              className={styles.closeBtn}
              onClick={handleDismiss}
            >
                {/* ADD ARIA LABEL */}
              <Close size={18} aria-hidden="true" focusable="false" /> {' '} Dismiss
            </button>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Drawer;