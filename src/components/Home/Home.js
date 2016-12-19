import React, {Component} from 'react';
import getUsers from '../../utils/getUsers';

class Home extends Component {
    constructor() {
        super();

        this.state = null;
    }

    componentDidMount() {
        getUsers()
            .then(function (docs) {
                this.setState({
                    users: docs
                });
            }.bind(this))
    }

    render() {
        if (!this.state) {
            return (
                <div>
                    <h1>No Users Registered, be the first one to sign up!</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h3 className='middle'>All Users</h3>
                    {this.state.users.map((user, index) => {
                        return (
                            <div className='col s12 m6 l6' key={index}>
                                <h5 className='header'>
                                    {user.firstName && user.lastName ? user.firstName + ' ' + user.lastName : user.email}
                                </h5>
                                <div className='card horizontal'>
                                    <div className='card-image'>
                                        <img src={user.picture} height='150px' width='150px'/>
                                    </div>
                                    <div className='card-stacked'>
                                        <div className='card-content'>
                                            <p>{user.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}

export default Home;