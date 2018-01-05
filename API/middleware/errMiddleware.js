

exports.errorHandler = function () {
    return function (err,req, res, next) {
        res.json(err)
    }
}