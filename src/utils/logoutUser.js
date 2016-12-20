import axios from 'axios';

function logoutUser() {
    return axios({
        url: '/api/logout',
        timeout: 20000,
        method: 'get',
        responseType: 'json'
    })
        .then(function (res) {
            // return res.redirect('/');
            return res.data;
        })
}

export default logoutUser();