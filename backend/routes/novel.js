const express = require('express')
const router = express.Router()

const NovelService = require('../services/novel-service')

router.get('/all', async (req,res) => {
    const novel =   await NovelService.findAll()
    res.render('list', {items: novel})
})

router.get('/:id', async (req, res) => {
    const user = await NovelService.find(req.params.id)
    res.render('data', {data: user})
})

router.post('/', async (req, res) => {
    const user =await NovelService.add(req.body)
    res.send(user)
})

router.delete('/:id',async (req, res) => {
    const user = await NovelService.del(req.params.id)

}) 

module.exports = router