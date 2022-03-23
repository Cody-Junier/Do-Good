import React, {useState
    // , useCallback
} from 'react';
// import {useDropzone} from 'react-dropzone'
import { gql, useMutation, useQuery } from '@apollo/client'
import Auth from '../utils/auth';

import Axios from 'axios';
// import { gql, graphql } from 'react-apollo';
import { QUERY_CHARITIES, QUERY_ME_BASIC } from '../utils/queries';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiY29keS1qdW5pZXIiLCJlbWFpbCI6ImRvb3RAZ21haWwuY29tIiwiX2lkIjoiNjIzYTgzNzcwNjI5ZTg3NDJlOWFiNjk2In0sImlhdCI6MTY0ODAwNjc3OCwiZXhwIjoxNjQ4MDEzOTc4fQ.l2Ptk-3JiC5581ZyDyInwlhdoEKwPlk9syFYZV9o3HQ"

export const ADD_CHARITY = gql`
    mutation addCharity($charityName: String!, $charityDescription: String!, $charityUrl: String!, $charityImg: String!){
        addCharity(charityName: $charityName, charityDescription: $charityDescription, charityUrl: $charityUrl, charityImg: $charityImg){
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

const AddCharity = (props) => {
    const loggedIn = Auth.loggedIn()

    const [charityName, setCharityName] = useState('')
    const [charityUrl, setCharityUrl] = useState('')
    const [charityDescription, setCharityDescription] = useState('')
    const [charityImage, setCharityImage] = useState('')
    const { loading, data} = useQuery(QUERY_CHARITIES)
    const { data: userData} = useQuery(QUERY_ME_BASIC)
    // const username={userData.me.username}

    const [addCharity, { error }]= useMutation(ADD_CHARITY)


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData()
        formData.append("file", charityImage)
        formData.append("upload_preset", "ictn1tnv")

        Axios.post(
            `https://api.cloudinary.com/v1_1/dwgja4bfo/image/upload`,
            formData).then((response) => {
                console.log(response.data.url)
                setCharityImage(response.data.url)
            })
        
        try{
            await addCharity({
                variables: {charityName, charityUrl, charityImage, charityDescription, token}
            })
            console.log({charityName, charityUrl, charityImage, charityDescription})
            setCharityName('')
            setCharityUrl('')
            setCharityDescription('')
            setCharityImage('')
        } catch (e) {
            console.log('there was an error')
            console.error(e);
          }
    }
    return (
        
        <main>
            {/* {loggedIn && userData ? ( */}
                <>
            <div>
              
                {/* <h2>
                    {userData.me.username}
                    </h2> */}
              
              </div>
          
            <h2>Hello</h2>
        <form onSubmit={handleFormSubmit}>
        <input className='form-input'
                placeholder="Charities' Name"
                value={charityName}
                id='charityName'
                onChange={e => setCharityName(e.target.value)}
              />
        <input className='form-input'
                placeholder="Charities' URL"
                value={charityUrl}
                id='charityUrl'
                onChange={e => setCharityUrl(e.target.value)}
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
        //   console.log(event.target.files[0]);
          setCharityImage(event.target.files[0]);
        }}
      />
    </div>
    {error && <span>Something went wrong...</span>}
        <button >Submit</button>
        </form>
        </>

        {/* ) : <h2>Please Log in to add a Charity</h2>} */}
        </main>
    );
    
}


export default AddCharity;