import React from 'react';
import CharityList from '../components/CharityList';
//import CharityForm from '../components/CharityForm';

// add this once logged in features are in place
// import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_CHARITYS } from '../utils/queries';



const Home = () => {

 
  const { loading, data } = useQuery(QUERY_CHARITYS);
  const charitys = data?.charitys || [];
  console.log(charitys);

  // add this once logged in features are in place
  // const loggedIn = Auth.loggedIn();*/


  return (
    <main>
       <div >
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CharityList charitys={charitys} title="Some Charitys" />
      )}
    </div>

    </main>
  );
};

export default Home;
