import React from 'react';
// import { Link } from 'react-router-dom';

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
                {charity.username}
            </p>
            <div className="card-body">
              {charity._id}
                <p>{charity.charityImg}</p>
                <p className="mb-0">
                  description: {charity.charityDescription} 
                </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CharityList;

