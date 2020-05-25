const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
},
    year: {
        type: Number,
        required: true
},
    authors: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Author',
        autopopulate: {
            maxDepth: 1
        }
            
    }],
    
})
BookSchema.plugin(require('mongoose-autopopulate'))

const BookModel = mongoose.model('Book', BookSchema)




module.exports = BookModel