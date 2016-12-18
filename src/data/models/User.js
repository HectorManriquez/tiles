/**
 * User model
 */

import mongooseConn from '../mongoose';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        require: false
    },
    description: {
        type: String,
        require: true
    }
});

const User = mongooseConn.model('User', userSchema);

export default User;