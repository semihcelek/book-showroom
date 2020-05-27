const express = require('express')
const router = express.Router()

const BookService = require('../services/book-service')

router.get('/all', async (req,res) => {
    const book =   await BookService.findAll()
    res.render('list', {items: book})
})
router.get('/all/json', async (req,res) => {
    const book =   await BookService.findAll()
    res.send(book)
})

router.get('/:id', async (req, res) => {
    const user = await BookService.find(req.params.id)
    res.render('data', {data: user})
})

router.post('/', async (req, res) => {
    const user =await BookService.add(req.body)
    res.send(user)
})

router.delete('/:id',async (req, res) => {
    const user = await BookService.del(req.params.id)
    res.send(user)
}) 

module.exports = router