import React, { useState } from 'react';

/*Here we will import queries and mutation*/


const CharityForm = () => {

  return (
    <section>
     
      <form
        
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Here's a new charity"
          onChange={handleChange}
        ></textarea>
        <button  type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default CharityForm;
