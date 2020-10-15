import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import './sign-in.styles.scss';
import { signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'Steve@gmail.com',
            password:'1231123123'
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({
            email : '', 
            password:''

        })
    }
    
    handleChange = event => {
        event.preventDefault();
        const { value , name } = event.target;
        this.setState ({ [name] : value});
    }
render(){
    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label='Email'
                    required/>
                  
                    <FormInput name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='Password'
                    required
                    />
                   
                  <div className='buttons'>
                  <CustomButton type='submit'> SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {' '}
                         Sign in with Google {' '}</CustomButton>
                  </div>
                </form>

        </div>
    )
}
}
export default SignIn;