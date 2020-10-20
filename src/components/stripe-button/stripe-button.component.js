import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForstripe = price * 100;
    const publishableKey = 'pk_test_51HeMQ2JxPNNMZXs2SRlIaJ00IRwlgHj2MCppX58iBC05Gp30hx0uzWl4pxcLG9VhiqEOhTFqYzasQo5FTWw9wmW300O4n6GgfH';
    const onToken = token => {
        console.log(token);
        alert('Payment Succesfull')
    }

    return (
        <StripeCheckout
            label='PaY Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description='Your total is $${price}'
            amount={priceForstripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;