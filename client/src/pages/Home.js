import React from 'react';
import CharityList from '../components/CharityList';
import Carousel from '../components/Carousel';
//import CharityForm from '../components/CharityForm';

// add this once logged in features are in place
// import Auth from '../utils/auth';

/*import { useQuery } from '@apollo/client';
import { QUERY_Charitys } from '../utils/queries';*/



const Home = () => {

 /*
  const { loading, data } = useQuery(QUERY_Charitys);
  const charitys = data?.charitys || [];

  // add this once logged in features are in place
  // const loggedIn = Auth.loggedIn();*/


  return (
    <main>
      <div >
        <Carousel/>
      <CharityList/>
      <Navbar/>
      {/* not used yet   <CharityForm/>     */}

      </div>

    </main>
  );
};

export default Home;
