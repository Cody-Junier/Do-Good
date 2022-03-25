import React from 'react';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

//const CharityList = () => {

  const CharityList = ({ charities, title }) => {
    if (!charities.length) {
      return <h3>No Charities Yet</h3>;
    }

  //add images and link for the charity  add real charity links

  return (
    <div >
      <h3>{title}</h3>
      {charities &&
        charities.map(charity => (
          <div key={charity._id} className='forum-box'>
            <p>{charity.username} </p>
            <div>
            
                <p>{charity.charityDescription}</p>
                <p>{charity.charityUrl}</p>
                <img className= "app-logo"src={charity.charityImg} />
            </div>
          </div>
        ))}
    </div>
  );
  };
  
export default CharityList;

