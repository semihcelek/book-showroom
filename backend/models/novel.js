const mongoose = require('mongoose')

const NovelSchema =  new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    genre: {
        type: String,
        required: true,
        minlength: 2
    },
    writer: [{

        type: mongoose.SchemaTypes.ObjectId,
        ref:'Author',
        autopopulate: {
             maxDepth: 1
            }
            
}]
   
})

NovelSchema.plugin(require('mongoose-autopopulate'))

const NovelModel = mongoose.model('Novel',NovelSchema)

module.exports = NovelModel