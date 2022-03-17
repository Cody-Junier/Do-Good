import React from 'react';
import CharityList from '../components/CharityList';
import CharityForm from '../components/CharityForm';
// add this once logged in features are in place
// import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_Charitys  } from '../utils/queries';



const Home = () => {

   // use useQuery hook to make query request
   const { loading, data } = useQuery(QUERY_Charitys);

// add this once logged in features are in place
  // const loggedIn = Auth.loggedIn();
  

  return (
    <main>
      <div >
        <h1>This is Test</h1>
        
          <div >
          <div >{/* PRINT Charity LIST */}</div>
            <CharityForm />
          </div>
        
        <div>
         
            <div></div>
          
            <CharityList
             
            />
          
        </div>
       
      </div>
      
    </main>
  );
};

export default Home;
