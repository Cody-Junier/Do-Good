import React from 'react';
import CharityList from '../components/CharityList';

// import CharityForm from '../components/CharityForm';

// // add this once logged in features are in place
import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_CHARITY } from '../utils/queries';



const Home = () => {

 
  const { loading, data } = useQuery(QUERY_CHARITY);
  const charities = data?.charities || [];
  console.log(charities);

  // add this once logged in features are in place
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CharityList render={data => (
              <ul>{ data }</ul>
            )}
            />
          )}
      </div>
  </main>
  );
};

export default Home;
