const mongoose = require('mongoose')



async function main(){

await mongoose.connect('mongodb://localhost/book',  { useUnifiedTopology: true, useNewUrlParser: true })
console.log('mongodb connected')
}

main()