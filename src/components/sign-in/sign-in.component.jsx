import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: '',
      password: ''
    });
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value }, () => console.log(this.state));
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
            value={this.state.email} 
            required
            handleChange={this.handleChange}
          />

          <FormInput 
            name="password"
            label= 'password'
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