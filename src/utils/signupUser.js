import axios from 'axios';

function signupUser(user) {
    return axios({
        url: '/api/signup',
        timeout: 20000,
        method: 'post',
        responseType: 'json',
        data: user
    })
        .then(function (res) {
            return res.data;
        })
}

export default signupUser;