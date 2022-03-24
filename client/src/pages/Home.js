import React from 'react';
import CharityList from '../components/CharityList';
// import CharityForm from '../components/CharityForm';

// // add this once logged in features are in place
// import Auth from '../utils/auth';
import Carousel from '../components/Carousel';
import { useQuery } from '@apollo/client';
import { QUERY_CHARITIES
  // , QUERY_ME_BASIC
} from '../utils/queries';



const Home = () => {

 
  const { loading, data } = useQuery(QUERY_CHARITIES);
  // const { data: userData } = useQuery(QUERY_ME_BASIC)
  const charities = data?.charities || [];
  console.log(charities);

  // add this once logged in features are in place
  // const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div><Carousel/></div>
      <div>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CharityList
              charities={charities}
              title="Here are some good causes!"
            />
          )}
        </div>
        {/* {loggedIn && userData ? (
          <div>
          </div>
        ) : null} */}
      </div>
    </main>
  );
};

export default Home;
