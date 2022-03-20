import React from 'react';
import { useParams } from 'react-router-dom';


import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_CHARITY } from '../utils/queries'

const SingleCharity = () => {


  return (
    <div>
    <h3>We help the eldery charity</h3>
    <a href="https://www.charitywatch.org/top-rated-charities"><img src="https://i.stack.imgur.com/34AD2.jpg"></img></a>
    <p>This charity helps old folks because jknsaknckjkjdsnk dcsscsd cd d cds cd c ds ds  cd cd
      c scd cd cd sd c c scd cd cdcd  ds cs c dc ssd c c ss dd c ds cds sd sdc  sd ds ds cs  csscdcssd 
      scccd  cd cdcd ds sd sdcc d ssc dscc dc sd sdcd ccscc sd sd sdc c c cd cds sd sd sd ds ds cds  sd
    </p>
   
  </div>
  );
};

export default SingleCharity;
