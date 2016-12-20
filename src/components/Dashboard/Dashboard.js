import React, {Component} from 'react';
import getUser from '../../utils/getUser';
import updateUser from '../../utils/updateUser';
import Promise from 'bluebird';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = null;

        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
        this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
    }

    componentWillMount() {
        getUser()
            .then((user) => {
                if (user) {
                    this.setState(user);
                } else {
                    this.setState({
                        picture: 'http://freevector.co/wp-content/uploads/2014/09/1954-face-with-a-question-mark7.png'
                    });
                }
            });
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleUpdateSubmit(event) {
        event.preventDefault();

        updateUser(this.state)
            .then((res) => {
                console.log(res);
            });
    }

    handlePasswordSubmit(event) {
        event.preventDefault();
        // TODO Need to add route for changing password
    }

    render() {
        if (!this.state) {
            return <h4>Not allowed</h4>
        } else {
            return (
                <div>
                    <h4>Update Information</h4>
                    <form className='col s12 m12 l12' onSubmit={this.handleUpdateSubmit}>
                        <div className='row'>
                            <div className='col s12 m6 l6'>
                                <img className='responsive-img' width='200px' height='200px'
                                     src={this.state.picture}/>
                            </div>
                            <div className='input-field col s12 m6 l6'>
                                <label htmlFor='picture'>Picture link</label>
                                <input value={this.state.picture ? this.state.picture : ''}
                                       id='picture' type='text' className='validate' onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12 m12 l12'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    value={this.state.email}
                                    id='email'
                                    type='text'
                                    className='validate'
                                    onChange={this.handleChange} required/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s6 m6 l6'>
                                <label htmlFor='first_name'>First Name</label>
                                <input value={this.state.firstName ? this.state.firstName : ''}
                                       id='firstName' type='text' className='validate' onChange={this.handleChange}/>
                            </div>
                            <div className='input-field col s6 m6 l6'>
                                <label htmlFor='last_name'>Last Name</label>
                                <input value={this.state.lastName ? this.state.lastName : ''}
                                       id='lastName' type='text' className='validate' onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col s12 m12 l12'>
                                <label htmlFor='description'>Description of yourself</label>
                                <div className='input-field inline'>
                                 <textarea value={this.state.description ? this.state.description : ''}
                                           id='description' rows='5' cols='25' onChange={this.handleChange}>
                                 </textarea>
                                </div>
                            </div>
                        </div>
                        <button className='btn waves-effect waves-light' type='submit'>
                            Update
                        </button>
                    </form>

                    <h4>Change Password</h4>
                    <form className='col s12 m12 l12' onSubmit={this.handlePasswordSubmit}>
                        <div className='row'>
                            <div className='input-field col s12 m12 l12'>
                                <label htmlFor='oldPassword'>Old Password</label>
                                <input id='oldPassword' type='password' className='validate'/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s12 m12 l12'>
                                <label htmlFor='newPassword'>New Password</label>
                                <input id='newPassword' type='password' className='validate'/>
                            </div>
                        </div>
                        <button className='btn waves-effect waves-light' type='submit'>
                            Update
                        </button>
                    </form>
                </div>
            )
        }
    }
}

export default Dashboard;