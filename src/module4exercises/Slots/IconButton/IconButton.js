import React from 'react';

import styles from './IconButton.module.css';

function IconButton({icon, children}) {
  return (
    <button className={styles.wrapper}>
      <span className={styles.iconWrapper}>
        {/* Icon slot */}
        {icon}
      </span>
      <span className={styles.childrenWrapper}>
        {/* Children slot */}
        {children}
      </span>
    </button>
  );
}

export default IconButton;