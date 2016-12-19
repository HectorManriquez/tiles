import React, {Component} from 'react';

class Head extends Component {
    componentDidMount() {
        $(this.refs.collapseButton).sideNav();
    }

    render() {
        return (
            <nav>
                <div className='nav-wrapper'>
                    <a href='/#' className='brand-logo'>Tiles</a>
                    <a href='#' data-activates='collapse' className='button-collapse right' ref='collapseButton'>
                        <i className='material-icons'>menu</i>
                    </a>
                    <ul className='right hide-on-med-and-down'>
                        <li><a href='/#/dashboard'>Dashboard</a></li>
                        <li><a href='/#/login'>Login</a></li>
                        <li><a href='/#/signup'>Sign Up</a></li>
                    </ul>
                    <ul id='collapse' className='side-nav'>
                        <li><a href='/#/dashboard'>Dashboard</a></li>
                        <li><a href='/#/login'>Login</a></li>
                        <li><a href='/#/signup'>Sign Up</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Head;