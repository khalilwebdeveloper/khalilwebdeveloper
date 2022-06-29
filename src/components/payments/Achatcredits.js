
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements,useStripe,useElements,CardElement } from "@stripe/react-stripe-js";
import Header from "../Header";
import Footer from "../Footer";
import Navbar from "../Navbar";
import React, { Component ,useState} from 'react';
import "./payment.css";
import StripeCheckout from 'react-stripe-checkout';

const stripePromise = loadStripe("pk_test_51LFaLMLaY6JFssCPtjGl5roDDiOG2kFZ2zwKTO64YuC3CjA8cwEQEuQ8RoyGubugrqp0SQSFL6WLrIyUwf00lfmW00BYzb3vh6");

const handleSubmit = (stripe, elements) => async () => {
  const cardElement = elements.getElement(CardElement);

  const {error, paymentMethod} = await stripe.createPaymentMethod({
    type: 'card',
    card: cardElement,
  });

  if (error) {
    console.log('[error]', error);
  } else {
    console.log('[PaymentMethod]', paymentMethod);
    // ... SEND to your API server to process payment intent
  }
};



const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  return (
    <>
      <div id="stripebtn">
      <CardElement />
      <button onClick={handleSubmit(stripe, elements)}>Stripe</button>
      </div>
      
    </>
  );
}

export default function App() {


  return (

  <div>
    <Header/>
    <Navbar/>
      <div className="container">
        <div className='row'>
          <div className="col-12">
            <h1>Achat de crédit</h1><br></br>
            <span>Utilisez cette page pour acheter du crédit</span>
            <hr></hr>

            <h3>Choisissez vos crédits :</h3>
          <div>
  <div className="alert alert-info">La TVA est facturée en plus pour les clients domiciliés en France</div>
  <div className="quantity mb-4">
    <input type="number" min={10} max={25000} step={5} defaultValue={10}   name="myRangeCred" id="myRangeCred" />
   
    {/* <div className="quantity-nav">
      <div className="quantity-button quantity-up">+</div>
      <div className="quantity-button quantity-down">-</div>
    </div> */}
  </div>
</div>
      <div className="row"> 
      
      <div className="col-12 paypalcontent">
      <div className="stripe-payment">
           
           <Elements stripe={stripePromise}>
               <PaymentForm />
             </Elements>
           </div>
           
      <PayPalScriptProvider options={{ "client-id": "AZHO1oJ9Mj-54PqigOxfsreUbHvplm1mpq3WfL8HyQPLe2HjgEIT5BMOpd4L3pWVGiNBp1roUKBmRmZ0" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: document.getElementById("myRangeCred").value  ,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        //alert(`Transaction completed by ${name}`);
                    });
                }}
            />
        </PayPalScriptProvider>
      
     

      </div>
     
      </div>
           
          </div>
        </div>
      </div>
    <Footer/>
  </div>
 

  );
}

