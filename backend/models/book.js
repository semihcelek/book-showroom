const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
},
    year: {
        type: Number,
        required: false
},
    authors: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Author',
        autopopulate: {
            maxDepth: 1
        }
            
    }]
})

const BookModel = mongoose.model('Book', BookSchema)

BookSchema.plugin(require('mongoose-autopopulate'))


module.exports = BookModel