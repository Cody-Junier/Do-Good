import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone'
// import axios from 'axios';
// import { gql, graphql } from 'react-apollo';

const AddCharity = () => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    return (
        <main>
            <h2>Hello</h2>
        <form>
        <input className='form-input'
                placeholder="Charities' Name"
                charityName='charityName'
                type='charityName'
                id='charityName'
              />
        <textarea
          placeholder="Tell us about this Charity!"
          className="charity-description"
        ></textarea>
        <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
        <button >Submit</button>
        </form>
        </main>
    );
    
}


export default AddCharity;