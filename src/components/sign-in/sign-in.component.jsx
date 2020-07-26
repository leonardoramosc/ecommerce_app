import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async  event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({email: '', password: ''});

    } catch(err) {
      console.log(err);
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>

          <FormInput 
            name="email"
            label= 'email'
            type='email'
            value={this.state.email} 
            required
            handleChange={this.handleChange}
          />

          <FormInput 
            name="password"
            label= 'password'
            type='password'
            value={this.state.password} 
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton isGoogleBtn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
          </div>
          
        </form>
      </div>

    )
  }
}

export default SignIn;