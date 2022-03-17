import React from 'react';
// Link not used yet
// import { Link } from 'react-router-dom';



const CharityList = ({ charity, title }) => {
  if (!charity.length) {
    return <h3>No Charity's Yet</h3>;
  }

  return (
    <section>
      
      {/* This is query data to be passed after queries are set up

      <div>
      <h3>{title}</h3>
      {charity &&
        charity.map(charity => (
          <div key={charity._id} >
            <p >
              {charity.username}
              thought on {charity.createdAt}
            </p>
            <div>
              <p>{charity.description}</p>
              <p>
               
              </p>
            </div>
          </div>
        ))}
    </div>
    /*}





      {/*Hardcoded card*/}
      <div>
        <h3>Charity List</h3>
        <p>This is some fake charity card texdfsklsdfjsdhfkjsdfhsjkhsdjksdhksdjhsdfhsdfajlhk
          sdhfsdfhlsdfkhadfkjdhsjdfjksdhaksdhfklhsffkdfsjkhlskjsdfhkfjhfdsksdhksdjfhfksdjshdfkj
          sdjfsfdsdfjslsfdhksdfaklhklsdflsfkhfskfhfsdkfhfkhfdsfkhjsdfklhfsdslkhsdakjsd
        </p>
      </div>



    </section>
  );
};

export default CharityList;
