import axios from 'axios';

function updateUser(userInfo) {
    return axios({
        url: '/api/update',
        timeout: 20000,
        method: 'post',
        responseType: 'json',
        data: userInfo
    })
        .then(function (res) {
            return res.data;
        })
}

export default updateUser;