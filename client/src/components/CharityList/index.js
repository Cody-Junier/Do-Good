import React from 'react';
import { Link } from 'react-router-dom';

const CharityList = ({ charities, title }) => {
  if (!charities.length) {
    return <h3>No Charities Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {charities &&
        charities.map(charity => (
          <div key={charity._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/add/${charity.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {charity.username}
              </Link>{' '}
              charity on {charity.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/${charity._id}`}>
              <p>{charity.charityDescription}</p>
              <p className="mb-0">
                Charity Url: {charity.charityUrl} || Click to{' '}
                {charity.charityUrl ? 'see' : 'visit'} the website!
              </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CharityList;

