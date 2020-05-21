import React, { Component } from 'react';
import './SignIn.styles.css';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '' }, () => { console.log("state", this.state) });

    }


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Login with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        handleChange={this.handleChange}
                        label="Email"
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        handleChange={this.handleChange}
                        label="Password"
                        value={this.state.password}
                        required
                    />
                    <div className="signIn-button">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleButton>{' '}Sign In With Google{' '}</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;