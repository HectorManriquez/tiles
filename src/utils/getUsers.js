import axios from 'axios';

function getUsers() {
    return axios({
        url: '/api/users',
        timeout: 20000,
        method: 'get',
        responseType: 'json'
    })
        .then(function (res) {
            return res.data;
        })
}

export default getUsers;