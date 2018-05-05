const loggerSettings = require('../logger');
const logger = loggerSettings.winstonLogger;
const utils = require('../util/util');
const request = require("request")

const informationDao = require('../models/information/information')

exports = module.exports = {
    add: async (req, res, next) => {
        try {
            let user = req.body;
            let result = await informationDao.add(user);
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
    detail: async (req, res, next) => {
        try {
            let query = req.params.id;
            let result = await informationDao.detail(query)
            res.json(result)
        } catch (err) {
            next(err)
        }
    },
    select_by_user: async (req, res, next) => {
        try {
            let query = req.params.id;
            let result = await informationDao.get_by_user(query)
            res.json(result)
        } catch (err) {
            next(err)
        }
    },
    del_by_user: async (req, res, next) => {
        try {
            let query = req.params.id;
            let result = await informationDao.del(query)
            res.json(result)
        } catch (err) {
            next(err)
        }
    },
    hot_select: async (req, res, next) => {
        try {
            let result = await informationDao.hot_select()
            res.json(result)
        } catch (err) {
            next(err)
        }
    },
}