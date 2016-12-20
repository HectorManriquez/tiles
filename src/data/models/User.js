/**
 * User model
 */

import bcrypt from 'bcrypt-nodejs';
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
}, {
    timestamps: true
});

/**
 * Password hashing
 */
userSchema.pre('save', function save(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(4, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

/**
 * Password validation
 */
userSchema.methods.comparePassword = function comparePassword(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        callback(err, isMatch);
    });
};

const User = mongooseConn.model('User', userSchema);

export default User;