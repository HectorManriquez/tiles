import React, {Component} from 'react';

class Head extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/#" className="brand-logo">Tiles</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/#/dashboard">Dashboard</a></li>
                        <li><a href="/#/login">Login</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Head;