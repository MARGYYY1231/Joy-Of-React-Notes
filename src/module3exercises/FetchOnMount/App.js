import React from 'react';
import useSWR from 'swr';

import UserCard from './UserCard.js';
import Spinner from './Spinner.js';

/*
  API INSTRUCTIONS
  
  This endpoint expects a GET request.
  
  To simulate an error, attach the following
  query parameter: `simulatedError=true`
*/

async function fetcher(endpoint){
  const response = await fetch (endpoint);
  const json = await response.json();

  if(!json.ok){
    throw json;
  }

  return json;
}

const ENDPOINT =
  'https://jor-test-api.vercel.app/api/get-current-user';

function App() {
  const { data, isLoading, error } = useSWR(ENDPOINT, fetcher);

  if(isLoading){
    return <Spinner />;
  }

  if(error){
    return <p>Something went wrong</p>;
  }
  
  return (
    <UserCard name={data?.user.name} email={data?.user.email} />
  );
}

export default App;