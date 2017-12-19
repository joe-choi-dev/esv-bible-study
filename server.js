const path = require('path')
const express = require('express')
const request = require('request')
const esvUrl = "https://api.esv.org/v3/passage/text/?q=matthew5&include-passage-references=false&include-first-verse-numbers=false&include-footnotes=false&include-footnote-body=false&include-short-copyright=false&include-copyright=false&include-passage-horizontal-lines=false&include-heading-horizontal-lines=false"

var options = {
    url: esvUrl,
    headers: {
        'Authorization': 'Token b31df51b9a0e5b1ca3d10799eaa1b5800bd368e7'
    }
};

module.exports = {
    app: function () {
        const app = express()
        const router = express.Router()
        router.get("/esv", function (req, res) {
            request(options, function (error, response, body) {
                if (!error) {
                    if (response.statusCode == 200) {
                        const data = JSON.parse(body);
                        const dataArray = data.passages[0].split("\n\n")

                        var titles = new Array();
                        for (i = 0; i < dataArray.length; i++) {
                            if (!dataArray[i].startsWith("[") && !dataArray[i].startsWith(" ") && dataArray[i] !== "") {
                                titles.push(dataArray[i])
                            }
                        }

                        res.json(titles);
                    } else {
                        if (response.statusCode) {
                            res.status(response.statusCode);
                        }
                        res.json({results: []});
                    }
                } else {
                    if (error.code === 'ETIMEDOUT') {
                        res.status(504);
                        res.json({results: []});
                    }
                    else {
                        res.status(500);
                        res.json({results: []});
                    }
                }
            });
        })
        const indexPath = path.join(__dirname, '/index.html')
        console.log(indexPath)
        const publicPath = express.static(path.join(__dirname, '/public'))
        console.log(publicPath)
        app.use('/public', publicPath)
        app.use('/api', router)
        app.get('/', function (_, res) { res.sendFile(indexPath) })

        return app
    }
}
