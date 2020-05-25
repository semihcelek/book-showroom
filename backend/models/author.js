const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    meetups: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Meetup',
        autopopulate: {
            maxDepth: 1
        }
    }]

})

AuthorSchema.plugin(require('mongoose-autopopulate'))

const AuthorModel = mongoose.model('Author', AuthorSchema)

module.exports = AuthorModel