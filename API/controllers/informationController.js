const loggerSettings = require('../logger');
const logger = loggerSettings.winstonLogger;
const utils = require('../util/util');
const request = require("request")

const informationDao = require('../models/information/information')

exports = module.exports = {
    add: async (req, res, next) => {
        try {
            let user = req.body;
            let result = await informationDao.add(user)
            res.json(result)
        } catch (err) {
            next(err)
        }
    },
    show: async (req, res, next) => {
        try {
            let query = req.query;
            let result = await informationDao.show(query)
            res.json(result)
        } catch (err) {
            next(err)
        }
    },
}