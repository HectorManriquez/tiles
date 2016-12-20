import axios from 'axios';

function getUser() {
    return axios({
        url: '/api/dashboard',
        timeout: 20000,
        method: 'get',
        responseType: 'json'
    })
        .then(function (res) {
            return res.data;
        })
}

export default getUser;