import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss'


const CartDropdown = ({ cartItem, history, toggleCartHidden }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >
            {
                cartItem.length ?
                cartItem.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                    ))
                : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
        </div>
        <CustomButton 
            onClick={()=> {
                history.push('/checkout');
                toggleCartHidden();
            }} 
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItem: selectCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown)) ;