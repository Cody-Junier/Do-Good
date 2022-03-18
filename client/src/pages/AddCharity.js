import React, {useState
    // , useCallback
} from 'react';
// import {useDropzone} from 'react-dropzone'
import { gql } from '@apollo/client'

// import axios from 'axios';
// import { gql, graphql } from 'react-apollo';
export const ADD_CHARITY = gql`
    mutation addCharity($charityName: String!, $charityDescription: String!, $charityUrl: String!){
        addCharity(charityName: $charityName, charityDescription: $charityDescription, charityUrl: $charityUrl){
            _id
            charityName
            charityDescription
            charityUrl
            charityImg
            createdAt
            username
        }
    }
`;

const AddCharity = () => {
    const [charityName, setCharityName] = useState('')
    const [charityDescription, setCharityDescription] = useState('')
    const [charityImage, setCharityImage] = useState('')

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{

            console.log({charityName, charityImage, charityDescription})
            setCharityName('')
            setCharityDescription('')
            setCharityImage('')
        } catch (e) {
            console.log('there was an error')
            console.error(e);
          }
    }
    return (
        <main>
            <h2>Hello</h2>
        <form onSubmit={handleFormSubmit}>
        <input className='form-input'
                placeholder="Charities' Name"
                value={charityName}
                id='charityName'
                onChange={e => setCharityName(e.target.value)}
              />
        <textarea
          placeholder="Tell us about this Charity!"
          className="charity-description"
          value={charityDescription}
          id='charityDescription'
          onChange={e => setCharityDescription(e.target.value)}
        ></textarea>
        
            <div>
      <h1>Upload an Image for your Charity!</h1>
      {charityImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(charityImage)} />
        <br />
        <button onClick={()=>setCharityImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setCharityImage(event.target.files[0]);
        }}
      />
    </div>
        <button >Submit</button>
        </form>
        </main>
    );
    
}


export default AddCharity;