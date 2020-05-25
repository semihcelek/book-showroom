const BaseService = require('./base-service')
const AuthorModel = require('../models/author')



class AuthorService extends BaseService {
    model = AuthorModel

  async  writeBook(author, book){
        author.books.push(book)
        book.authors.push(author)
        await author.save()
        await book.save()

    }
}

module.exports =  new AuthorService()