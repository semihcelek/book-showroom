const mongoose = require('mongoose')



async function main(){

await mongoose.connect(process.env.MONGODB_CONNECTION_STRING  ||'mongodb://localhost/book',  { useUnifiedTopology: true, useNewUrlParser: true })
console.log('mongodb connected')
}

main()