import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();

  return (
    <div className="mx-auto text-center">
      <h3 className="text-3xl">
        Payment for <span className="font-bold">{booking.productName}</span>
      </h3>
      <p className="text-xl">
        Please pay <strong>{booking.price}</strong> BDT/=
      </p>
      <div className="w-96 my-12 mx-auto text-white">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
