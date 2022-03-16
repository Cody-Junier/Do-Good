import React from 'react';
import CharityList from '../components/CharityList';
import CharityForm from '../components/CharityForm';

import Auth from '../utils/auth';



const Home = () => {

  const loggedIn = Auth.loggedIn();
  

  return (
    <main>
      <div >
        
          <div >
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
