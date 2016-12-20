import axios from 'axios';

function loginUser(user) {
    return axios({
        url: '/api/login',
        timeout: 20000,
        method: 'post',
        responseType: 'json',
        data: user
    })
        .then(function (res) {
            return res.data;
        })
}

export default loginUser;