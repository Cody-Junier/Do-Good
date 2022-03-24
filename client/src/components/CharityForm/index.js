// import React, { useState } from 'react';

// import { useMutation } from '@apollo/client';
// import { ADD_CHARITY } from '../../utils/mutations';
// import { QUERY_CHARITIES, QUERY_ME } from '../../utils/queries';

// const CharityForm = () => {
//   const [charityDescription, setDescription] = useState('');
//   //const [characterCount, setCharacterCount] = useState(0);

//   const [addCharity, { error }] = useMutation(ADD_CHARITY, {
//     update(cache, { data: { addCharity } }) {
//       try {
//         // could potentially not exist yet, so wrap in a try...catch
//         const { charities } = cache.readQuery({ query: QUERY_CHARITIES });
//         cache.writeQuery({
//           query: QUERY_CHARITIES,
//           data: { charities: [addCharity, ...charities] }
//         });
//       } catch (e) {
//         console.error(e);
//       }
  
//       // update me object's cache, appending new charity to the end of the array
//       const { me } = cache.readQuery({ query: QUERY_ME });
//       cache.writeQuery({
//         query: QUERY_ME,
//         data: { me: { ...me, charities: [...me.charities, addCharity] } }
//       });
//     }
//   });

//   const handleChange = event => {
//     if (event.target.value.length <= 280) {
//       setDescription(event.target.value);
//     }
//   };

//   const handleFormSubmit = async event => {
//     event.preventDefault();
  
//     try {
//       // add charity to database
//       await addCharity({
//         variables: { charityDescription }
//       });
  
//       // clear form value
//       setDescription('');
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div>
//       <form
//         className="flex-row justify-center justify-space-between-md align-stretch"
//         onSubmit={handleFormSubmit}
//       >
//       <textarea
//         placeholder="Here's a new thought..."
//         value={charityDescription}
//         className="form-input col-12 col-md-9"
//         onChange={handleChange}
//       ></textarea>
//         <button className="btn col-12 col-md-3" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CharityForm;