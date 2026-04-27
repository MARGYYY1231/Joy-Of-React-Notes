import React from 'react';

import styles from './List.module.css';

function List({ as: Tag = 'ul', className = '', children, ...delegated }) {
  const VALID_TAGS = ['ul', 'ol'];

  if (!VALID_TAGS.includes(Tag)) {
    throw new Error(
      `Unrecognized tag: ${Tag}. Expected: ${VALID_TAGS}`
    );
  }
  return (
    <Tag
      {...delegated}
      className={`${styles.wrapper} ${className}`}
    >
      {children}
    </Tag>
  )
}

export default List;