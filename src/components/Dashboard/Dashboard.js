import React, {Component} from 'react';
import updateUser from '../../utils/updateUser';
import Promise from 'bluebird';

import Head from '../Header/Header';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            picture: 'http://freevector.co/wp-content/uploads/2014/09/1954-face-with-a-question-mark7.png'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
        this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleUpdateSubmit(event) {
        event.preventDefault();

        updateUser(this.state);
    }

    handlePasswordSubmit(event) {
        event.preventDefault();
        // TODO Need to add route for changing password
    }

    render() {
        return (
            <div className="container">
                <Head/>
                <h4>Update Information</h4>
                <form className="col s12 m12 l12" onSubmit={this.handleUpdateSubmit}>
                    <div className="row">
                        <div className="col s6 m6 l6">
                            <img className="responsive-img"
                                 src={this.state.picture}/>
                        </div>
                        <div className="input-field col s6 m6 l6 valign-wrapper">
                            <label htmlFor="picture">Picture link</label>
                            <input id="picture" type="text" className="validate" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="row">
                        <div className="input-field col s12 m12 l12">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" className="validate" onChange={this.handleChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6 m6 l6">
                            <label htmlFor="first_name">First Name</label>
                            <input id="firstName" type="text" className="validate" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field col s6 m6 l6">
                            <label htmlFor="last_name">Last Name</label>
                            <input id="lastName" type="text" className="validate" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m12 l12">
                            <label htmlFor="description">Description of yourself</label>
                            <div className="input-field inline">
                                 <textarea id="description" rows="5" cols="25" onChange={this.handleChange}>
                                 </textarea>
                            </div>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit">
                        Update
                    </button>
                </form>

                <h4>Change Password</h4>
                <form className="col s12 m12 l12" onSubmit={this.handlePasswordSubmit}>
                    <div className="row">
                        <div className="input-field col s12 m12 l12">
                            <label htmlFor="oldPassword">Old Password</label>
                            <input id="oldPassword" type="password" className="validate"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m12 l12">
                            <label htmlFor="newPassword">New Password</label>
                            <input id="newPassword" type="password" className="validate"/>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit">
                        Update
                    </button>
                </form>
            </div>
        )
    }
}

export default Dashboard;