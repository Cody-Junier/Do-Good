import React from 'react';
import { Link } from 'react-router-dom';

const CharityList = ({ charities }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Charities</span>
      </div>
      <div className="card-body">
        {charities &&
          charities.map(charityUrl => (
            <p className="pill mb-3" key={charityUrl}>
              {charities.charityDescription} {'// '}
              <Link to={charityUrl} style={{ fontWeight: 700 }}>
                {charities.username} on {charities.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default CharityList;


