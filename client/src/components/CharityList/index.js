import React from 'react';
// Link not used yet
import { Link } from 'react-router-dom';

// const UserImage = require("../../images/.svg")




// import { useState, useEffect } from 'react';

// export default function HeroCarousel() {
//   const [focusedHero, setFocusedHero] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       setFocusedHero(focusedHero > 2 ? 0 : focusedHero + 1)
//     }, 5000)
//   }, [])
//   <img src={require("../../../src/images/charity1.jpg")} className={focusedHero === 0 ? 'focused' : ''} />
//   <img src={require("../../../src/images/charity2.jpg")}  className={focusedHero === 1 ? 'focused' : ''} />
//   <img src={require("../../../src/images/charity3.jpg")}  className={focusedHero === 2 ? 'focused' : ''} />  
// }

const CharityList = () => {

  /*const CharityList = ({ charity, title }) => {
    if (!charity.length) {
      return <h3>No Charity's Yet</h3>;
    }*/

  return (
    <section>

      {/* This is query data to be passed after queries are set up into the cards

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
    */}





      {/*Hardcoded card*/}
      <main>
      <div className="Forum-box">
      <img src='' alt="user-ph"></img>
        <h3>We help the eldery charity</h3>
        <p>This charity helps old folks because jknsaknckjkjdsnk dcsscsd cd d cds cd c ds ds  cd cd
          c scd cd cd sd c c scd cd cdcd  ds cs c dc ssd c c ss dd c ds cds sd sdc  sd ds ds cs  csscdcssd 
          scccd  cd cdcd ds sd sdcc d ssc dscc dc sd sdcd ccscc sd sd sdc c c cd cds sd sd sd ds ds cds  sd
        </p>
        <p>
          <Link to={`/charity`}>LINK TO SINGLE CHARITY</Link>
        </p>
      </div>

      <div className="Forum-box">
        <h3>We help the youth of America charity</h3>
        <p>This charity helps youth because jknsaknckjkjdsnk dcsscsd cd d cds cd c ds ds  cd cd
          c scd cd cd sd c c scd cd cdcd  ds cs c dc ssd c c ss dd c ds cds sd sdc  sd ds ds cs  csscdcssd 
          scccd  cd cdcd ds sd sdcc d ssc dscc dc sd sdcd ccscc sd sd sdc c c cd cds sd sd sd ds ds cds  sd
        </p>
        <p>
          <Link to={`/charity`}>LINK TO SINGLE CHARITY</Link>
        </p>
      </div>

      <div className="Forum-box">
        <h3>We help the everbody charity</h3>
        <p>This charity helps everybody because jknsaknckjkjdsnk dcsscsd cd d cds cd c ds ds  cd cd
          c scd cd cd sd c c scd cd cdcd  ds cs c dc ssd c c ss dd c ds cds sd sdc  sd ds ds cs  csscdcssd 
          scccd  cd cdcd ds sd sdcc d ssc dscc dc sd sdcd ccscc sd sd sdc c c cd cds sd sd sd ds ds cds  sd
        </p>
        <p>
          <Link to={`/charity`}>LINK TO SINGLE CHARITY</Link>
        </p>
      </div>
      </main>



    </section>
  );
};

export default CharityList;
