import React, {Component} from 'react';
import getUser from '../../utils/getUser';

class Head extends Component {
    constructor() {
        super();

        this.state = {
            user: false
        };
    }

    componentWillMount() {
        getUser()
            .then((user) => {
                if (user) {
                    this.setState({ user: true });
                }
            });
    }

    componentDidMount() {
        $(this.refs.collapseButton).sideNav();
    }

    render() {
        if (this.state.user) {
            return (
                <nav>
                    <div className='nav-wrapper blue-grey lighten-3'>
                        <a href='/' className='brand-logo center'>Tiles</a>
                        <a href='#' data-activates='collapse' className='button-collapse right' ref='collapseButton'>
                            <i className='material-icons'>menu</i>
                        </a>
                        <ul className='right hide-on-med-and-down'>
                            <li><a href='/dashboard'>Dashboard</a></li>
                            <li><a href='/api/logout'>Logout</a></li>
                        </ul>
                        <ul id='collapse' className='side-nav'>
                            <li><a href='/dashboard'>Dashboard</a></li>
                            <li><a href='/api/logout'>Logout</a></li>
                        </ul>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav>
                    <div className='nav-wrapper blue-grey lighten-3'>
                        <a href='/' className='brand-logo center'>Tiles</a>
                        <a href='#' data-activates='collapse' className='button-collapse right' ref='collapseButton'>
                            <i className='material-icons'>menu</i>
                        </a>
                        <ul className='right hide-on-med-and-down'>
                            <li><a href='/login'>Login</a></li>
                            <li><a href='/signup'>Sign Up</a></li>
                        </ul>
                        <ul id='collapse' className='side-nav'>
                            <li><a href='/login'>Login</a></li>
                            <li><a href='/signup'>Sign Up</a></li>
                        </ul>
                    </div>
                </nav>
            )
        }
    }
}

export default Head;