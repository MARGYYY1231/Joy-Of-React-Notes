import React from 'react';

function SectionWithHeading({level=3, title, children }) {
  if(typeof level !== 'number' ||
    level < 1 ||
    level > 6){
    throw new Error(`Unrecognized heading level: ${level}`);
    }
  const Tag = `h${level}`;
  return (
    <section>
      <Tag>{title}</Tag>
      {children}
    </section>
  );
}

export default SectionWithHeading;