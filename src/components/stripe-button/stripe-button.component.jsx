import React from 'react'

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForeStripe = price * 100;
    const pubicshableKey = 'pk_test_gmsYL4yuygUcKxbpEnPCaMkN002TL9YrVD';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`You total is $ ${price}`}
            amount={priceForeStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={pubicshableKey}
        />
    )

}

export default StripeCheckoutButton;