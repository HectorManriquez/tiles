import axios from 'axios';

function logoutUser() {
    return axios({
        url: '/api/logout',
        timeout: 20000,
        method: 'get',
        responseType: 'json'
    })
}

export default logoutUser();