import React from 'react';
import CharityList from '../components/CharityList';
import CharityForm from '../components/CharityForm';
// add this once logged in features are in place
// import Auth from '../utils/auth';



const Home = () => {
// add this once logged in features are in place
  // const loggedIn = Auth.loggedIn();
  

  return (
    <main>
      <div >
        <h1>This is Test</h1>
        
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
