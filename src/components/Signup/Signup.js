import React, {Component} from 'react';
import Head from '../Head/Head';
import signupUser from '../../utils/signupUser';

class Signup extends Component {
    handleSubmit(event) {
        event.preventDefault();

        signupUser({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        });
    }

    render() {
        return (
            <div className='container'>
                <Head/>
                <form className='col s12 m12 l12' onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <div className='input-field col s12 m12 l12'>
                            <label htmlFor='email'>Email</label>
                            <input id='email' ref='email' type='text' required/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s12 m12 l12'>
                            <label htmlFor='password'>Password</label>
                            <input id='password' ref='password' type='password' required/>
                        </div>
                    </div>
                    <button className='btn waves-effect waves-light' type='submit' name='signup'>
                        Signup
                    </button>
                </form>
            </div>
        );
    }
}

export default Signup;