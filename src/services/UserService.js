const User = require('../models/UserModel')
const bcrypt = require('bcrypt');

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { email, password, confirmPassword } = newUser
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The email is already in use'
                })
            }
            const hash = bcrypt.hashSync(password, 10)
            const createdUser = await User.create({
                email,
                password: hash,
            })
            if(createdUser) {
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createdUser
                })
            }
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = { 
    createUser,
}