import React, {Component} from 'react';
import {
    Router,
    Route,
    browserHistory
} from 'react-router';
import Header from './Header/Header';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import NotFound from './NotFound';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Router history={browserHistory}>
                    <Route path='/' component={Home}/>
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/login' component={Login}/>
                    <Route path='*' component={NotFound}/>
                </Router>
            </div>
        )
    }
}

export default App;