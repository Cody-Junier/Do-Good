import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import CharityForm from '../components/CharityForm';
import CharityList from '../components/CharityList';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_CHARITY } from '../utils/mutations';
import Auth from '../utils/auth';

const Profile = (props) => {
  const { username: userParam } = useParams();

  const [addCharity] = useMutation(ADD_CHARITY);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }


  const handleClick = async () => {
    try {
      await addCharity({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Charity
          </button>
        )}
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <CharityList
            charities={user.charities}
            title={`${user.username}'s charities...`}
          />
        </div>

        <div className="col-12 col-lg-3 mb-3">
          <CharityList
            username={user.username}
            charities={user.charities}
          />
        </div>
      </div>
      <div className="mb-3">{!userParam && <CharityForm />}</div>
    </div>
  );
};

export default Profile;