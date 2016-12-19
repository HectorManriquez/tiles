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

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Home} />
                <Route path='/dashboard' component={Dashboard}/>
            </Router>
        )
    }
}

export default App;