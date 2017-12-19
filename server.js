const path = require('path')
const express = require('express')
const request = require('request')
const esvRoute = require('./src/routes/esv')

module.exports = {
    app: function () {
        const app = express()
        const indexPath = path.join(__dirname, '/index.html')
        const publicPath = express.static(path.join(__dirname, '/public'))
        app.use('/public', publicPath)
        app.use('/api/esv', esvRoute);
        app.get('/', function (_, res) { res.sendFile(indexPath) })
        return app
    }
}
