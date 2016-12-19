/**
 * User model
 */

import mongooseConn from '../mongoose';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: false
    },
    lastName: {
        type: String,
        require: false
    },
    picture: {
        type: String,
        require: false
    },
    description: {
        type: String,
        require: false
    }
});

const User = mongooseConn.model('User', userSchema);

export default User;