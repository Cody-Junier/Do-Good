import React from 'react';
// Link not used yet
// import { Link } from 'react-router-dom';



  const CharityList = ({ charity, title }) => {
    if (!charity.length) {
      return <h3>No Charity's Yet</h3>;
    }
  
  return (
    <section>
    <h3>Charity List</h3>
    <p>This is some fake charity card texdfsklsdfjsdhfkjsdfhsjkhsdjksdhksdjhsdfhsdfajlhk
      sdhfsdfhlsdfkhadfkjdhsjdfjksdhaksdhfklhsffkdfsjkhlskjsdfhkfjhfdsksdhksdjfhfksdjshdfkj
      sdjfsfdsdfjslsfdhksdfaklhklsdflsfkhfskfhfsdkfhfkhfdsfkhjsdfklhfsdslkhsdakjsd
    </p>
    
        
      
  </section>
  );
};

export default CharityList;
