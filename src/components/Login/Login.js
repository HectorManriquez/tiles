import React, {Component} from 'react';
import loginUser from '../../utils/loginUser';

class Home extends Component {
    handleSubmit(event) {
        event.preventDefault();

        loginUser({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        });
    }

    render() {
        return (
            <div>
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
                    <button className='btn waves-effect waves-light' type='submit' name='login'>
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default Home;