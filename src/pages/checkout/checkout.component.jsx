import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { selectCartTotal } from '../../redux/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'



import './checkout.styles.scss'

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span className=''>Product</span>
            </div>
            <div className='header-block'>
                <span className=''>Description</span>
            </div>
            <div className='header-block'>
                <span className=''>Quantity</span>
            </div>
            <div className='header-block'>
                <span className=''>Price</span>
            </div>
            <div className='header-block'>
                <span className=''>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className='total'>
            <span>TOTAL: $ {total}</span>
        </div>
        <div className='text-warning'>
            *please use the following test credit card for payment*
            <br />
            4242 4242 4242 42 42 - Exp: 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})



export default connect(mapStateToProps)(CheckoutPage)