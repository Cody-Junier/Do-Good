import React from 'react';
import { useParams } from 'react-router-dom';


//import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_CHARITY } from '../utils/queries'


const SingleCharity = (props) => {
  const { id: charityId } = useParams();

  const { loading, data } = useQuery(QUERY_CHARITY, {
    variables: { id: charityId },
  });

  const charity = data?.charity || {};

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <div>
        <p>
          <span >
            {charity.username}
          </span>{' '}
          charity on {charity.createdAt}
        </p>
        <div >
          <p>{charity.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCharity;
