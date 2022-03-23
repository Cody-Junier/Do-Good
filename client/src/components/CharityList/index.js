import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

//const CharityList = () => {

  const CharityList = ({ charities, title }) => {
    if (!charities.length) {
      return <h3>No Charities Yet</h3>;
    }

  //add images and link for the charity  add real charity links

  return (
    <div>
      <h3>{title}</h3>
      {charities &&
        charities.map(charity => (
          <div key={charity._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${charity.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {charity.username}
              </Link>{' '}
              charity on {charity.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/profile/${charity._id}`}>
                <p>{charity.description}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
  };
  
  export default CharityList;





      /*Hardcoded card
      
      <main>
        <h1>This is The Charity Header</h1>
      <div>
        <h3>We help the eldery charity</h3>
        <a href="https://www.charitywatch.org/top-rated-charities"><img src="https://i.stack.imgur.com/34AD2.jpg"></img></a>
        <p>This charity helps old folks because jknsaknckjkjdsnk dcsscsd cd d cds cd c ds ds  cd cd
          c scd cd cd sd c c scd cd cdcd  ds cs c dc ssd c c ss dd c ds cds sd sdc  sd ds ds cs  csscdcssd 
          scccd  cd cdcd ds sd sdcc d ssc dscc dc sd sdcd ccscc sd sd sdc c c cd cds sd sd sd ds ds cds  sd
        </p>
        <p>
          <Link to={`/charity`}>LINK TO SINGLE CHARITY</Link>
        </p>
        <img src="https://i.stack.imgur.com/34AD2.jpg" />
      </div>

      <div>
        <h3>We help the youth of America charity</h3>
        <a href="https://www.charitywatch.org/top-rated-charities"><img src="https://i.stack.imgur.com/34AD2.jpg"></img></a>
        <p>This charity helps youth because jknsaknckjkjdsnk dcsscsd cd d cds cd c ds ds  cd cd
          c scd cd cd sd c c scd cd cdcd  ds cs c dc ssd c c ss dd c ds cds sd sdc  sd ds ds cs  csscdcssd 
          scccd  cd cdcd ds sd sdcc d ssc dscc dc sd sdcd ccscc sd sd sdc c c cd cds sd sd sd ds ds cds  sd
        </p>
        <p>
          <Link to={`/charity`}>LINK TO SINGLE CHARITY</Link>
        </p>
      </div>

      <div>
        <h3>We help the everbody charity</h3>
        <a href="https://www.charitywatch.org/top-rated-charities"><img src="https://i.stack.imgur.com/34AD2.jpg"></img></a>
        <p>This charity helps everybody because jknsaknckjkjdsnk dcsscsd cd d cds cd c ds ds  cd cd
          c scd cd cd sd c c scd cd cdcd  ds cs c dc ssd c c ss dd c ds cds sd sdc  sd ds ds cs  csscdcssd 
          scccd  cd cdcd ds sd sdcc d ssc dscc dc sd sdcd ccscc sd sd sdc c c cd cds sd sd sd ds ds cds  sd
        </p>
        <p>
          <Link to={`/charity`}>LINK TO SINGLE CHARITY</Link>
        </p>
      </div>
      </main>*/


