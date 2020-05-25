const BaseService = require('./base-service')
const NovelModel = require('../models/novel')


class NovelService extends BaseService {
    model = NovelModel
}

module.exports =new  NovelService()