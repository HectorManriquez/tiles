import React, {Component} from 'react';

import Head from '../Head/Head';

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <Head/>
                <form className="col s12 m12 l12">
                    <div className="row">
                        <div className="col s6 m6 l6">
                            <img className="responsive-img"
                                 src="http://vignette4.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest/scale-to-width-down/300?cb=20160304132814"/>
                        </div>
                        <div className="input-field col s6 m6 l6 valign-wrapper">
                            <input id="picture" type="text" className="validate"/>
                            <label for="picture">Picture Link</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m12 l12">
                            <input id="email" type="text" className="validate"/>
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6 m6 l6">
                            <input id="first_name" type="text" className="validate"/>
                            <label for="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6 m6 l6">
                            <input id="last_name" type="text" className="validate"/>
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m12 l12">
                            <input id="password" type="password" className="validate"/>
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m12 l12">
                            Description of yourself:
                            <div className="input-field inline">
                                 <textarea rows="5" cols="25">
                                 </textarea>
                            </div>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">
                        Update
                    </button>
                </form>
            </div>
        )
    }
}

export default Dashboard;