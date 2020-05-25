const express = require('express')
const router = express.Router()

const AuthorService = require('../services/author-service')
const BookService = require('../services/book-service')

router.get('/all', async (req,res) => {
    const authors =  await AuthorService.findAll()
    res.render('list', { items: authors })
})

router.get('/:id', async (req, res) => {
    const user = await AuthorService.find(req.params.id)
    res.render('data', {data: user})
})

router.post('/', async (req, res) => {
    const user =await AuthorService.add(req.body)
    res.send(user)
})

router.delete('/:id', async (req, res) => {
    const user = await AuthorService.del(req.params.id)
    res.send(user)
}) 
router.post('/:id/books', async (req, res)=> {
    const author = await AuthorService.find(req.params.id)
    const book = await BookService.find(req.body.book)
    await AuthorService.writeBook(author, book)
    res.send(author)
})


module.exports = router