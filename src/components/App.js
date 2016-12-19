import React, {Component} from 'react';
import {
    Router,
    Route,
    Link,
    IndexRoute,
    hashHistory,
    browserHistory
} from 'react-router';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import NotFound from './NotFound';

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Home}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/login' component={Login}/>
                <Route path='*' component={NotFound}/>
            </Router>
        )
    }
}

export default App;