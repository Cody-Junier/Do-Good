import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Footer = () => {
  const [product] = React.useState({
    name: "Donate",
    description: "Charity Donate"
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:3001/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className='container'>
            <StripeCheckout
              stripeKey='pk_live_51KdizXG2yPcwqOdXFoWftK8p5YpZyO6DbflzeDpeWS2zqjiwtjqoka3hHeXFmGHSKlavP7Qs1TFtnPMcqBvVFzYZ00TR0eh0AJ'
              token={handleToken}
              name="Charity Donate"
              label='Donate'
              billingAddress
              shippingAddress
              />
          </div>
      
    </footer>
  );
};

export default Footer;
