import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'
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
            createdAt
            username
        }
    }
`;

const AddCharity = () => {
    const [charityName, setCharityName] = useState('')
    const [charityDescription, setCharityDescription] = useState('')
    const [charityImage, setCharityImage] = useState('')
    
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            console.log({charityName, charityImage, charityDescription})
            console.log(charityName)
            setCharityName('')
            console.log(charityDescription)
            setCharityDescription('')
            console.log(charityImage)
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
        <div {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" onChange={e => setCharityImage(e.target.files[0])} />
        <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
        <button >Submit</button>
        </form>
        </main>
    );
    
}


export default AddCharity;