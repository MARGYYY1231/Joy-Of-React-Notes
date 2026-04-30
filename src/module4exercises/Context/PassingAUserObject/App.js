import React from 'react';

import useUser from './use-user.hook';
import AccountDropdown from './AccountDropdown';
import CourseIndexLayout from './CourseIndexLayout';

export const UserContext = React.createContext();

function App() {
  const user = useUser();
  return (
    <>
      <UserContext.Provider user={user}>
        <AccountDropdown user={user} />
        <CourseIndexLayout />
      </UserContext.Provider>
    </>
  );
}

export default App;