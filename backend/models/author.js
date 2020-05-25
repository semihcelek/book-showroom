const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    books: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book',
        autopopulate: {
            maxDepth: 1
        }
    }],
    novels: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Novel',
        autopopulate: {
            maxDepth: 1
        }
    }]
   

})

AuthorSchema.plugin(require('mongoose-autopopulate'))

const AuthorModel = mongoose.model('Author', AuthorSchema)

module.exports = AuthorModel