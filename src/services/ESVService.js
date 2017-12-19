const request = require('request')
const esvUrl1 = "https://api.esv.org/v3/passage/text/?q="
const esvUrl2 = "&include-passage-references=false&include-first-verse-numbers=false&include-footnotes=false&include-footnote-body=false&include-short-copyright=false&include-copyright=false&include-passage-horizontal-lines=false&include-heading-horizontal-lines=false"

var esvUrl = ""

var options = {
    url: esvUrl,
    headers: {
        'Authorization': 'Token b31df51b9a0e5b1ca3d10799eaa1b5800bd368e7'
    }
};

module.exports = {

    getChapterHeadings: function(query, res) {
        var options = {
            url: esvUrl1 + query + esvUrl2,
            headers: {
                'Authorization': 'Token b31df51b9a0e5b1ca3d10799eaa1b5800bd368e7'
            }
        };
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

                    res.json({titles: titles});
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
    },

    getVerses: function(query, res) {
        var options = {
            url: esvUrl1 + query + esvUrl2,
            headers: {
                'Authorization': 'Token b31df51b9a0e5b1ca3d10799eaa1b5800bd368e7'
            }
        };
        request(options, function (error, response, body) {
            if (!error) {
                if (response.statusCode == 200) {
                    const data = JSON.parse(body);
                    res.json(data);
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
    }
}


