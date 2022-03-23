import React, {useState
    // , useCallback
} from 'react';
import { useMutation
    // , useQuery
 } from '@apollo/client'
import Auth from '../utils/auth';
import { ADD_CHARITY } from '../utils/mutations';
import Axios from 'axios';
// import { gql, graphql } from 'react-apollo';
// import { QUERY_CHARITIES, QUERY_ME_BASIC } from '../utils/queries';


const AddCharity = () => {
    
    const [charityName, setCharityName] = useState('')
    const [charityUrl, setCharityUrl] = useState('')
    const [charityDescription, setCharityDescription] = useState('')
    const [charityImage, setCharityImage] = useState('')
    // const { loading, data} = useQuery(QUERY_CHARITIES)
    // const { data: userData} = useQuery(QUERY_ME_BASIC)
    // const username={userData.me.username}

    const [createCharity, { error }]= useMutation(ADD_CHARITY)
    
   const imageSubmit = async(event) => {
       event.preventDefault()
       console.log(event.target.files[0])
       const formData = new FormData()
       formData.append("file", event.target.files[0])
       formData.append("upload_preset", "ictn1tnv")
       
       Axios.post(
           `https://api.cloudinary.com/v1_1/dwgja4bfo/image/upload`,
           formData).then((response) => {
               console.log(response.data.url)
               setCharityImage(response.data.url)
               console.log(charityImage)
            })
        }
            
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const token = Auth.loggedIn()? Auth.getToken(): null
        console.log(token)
        
        console.log({charityName, charityDescription, charityUrl, charityImage})
        try{
            const{data} = await createCharity({
                variables: {charityName, charityDescription, charityUrl, charityImage }
            })
            console.log(data)
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

      <form>
            <div>
      <h1>Upload an Image for your Charity!</h1>
      {charityImage && (
        <div>
        <img alt="not found" width={"250px"} src={charityImage} />
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
          imageSubmit(event);
        }}
      />
    </div>
    </form>

            <h2>Hello</h2>
        <form onSubmit={e =>handleFormSubmit(e)}>
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
        
    {error && <span>Something went wrong...</span>}
        <button >Submit</button>
        </form>
        </>

        {/* ) : <h2>Please Log in to add a Charity</h2>} */}
        </main>
    );
    
}


export default AddCharity;