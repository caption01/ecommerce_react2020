import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {

    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }   

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: '', password: ''})
    }

    handleChange = e => {
        const {value, name} = e.target

        this.setState({ [name]: value} )
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an Account</h2>
                <span>Sign in with your email and password</span>
                
                <form onClick={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name='email' 
                        type='email' 
                        label='email'
                        value={this.state.email} required />
                    <FormInput
                        handleChange={this.handleChange}
                        name='password' 
                        type='password' 
                        label='password'
                        value={this.state.password} required />
                    <div className='button'>
                        <CustomButtom type='submit'> SIGN IN </CustomButtom>
                        <CustomButtom onClick={signInWithGoogle} isGoogleSignIn > Sign in with google </CustomButtom>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn