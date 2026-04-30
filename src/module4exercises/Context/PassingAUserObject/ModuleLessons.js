import React from 'react';
import { UserContext } from './App';

function ModuleLessons() {
  const user = React.useContext(UserContext);
  return (
    <>
      User email: {user?.email || 'Not provided'}
    </>
  );
}

export default ModuleLessons;