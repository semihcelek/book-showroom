const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema({}, {strict: false })

UserSchema.plugin(passportLocalMongoose)

const UserModel =mongoose.model('UserModel', UserSchema)

module.exports = UserModel