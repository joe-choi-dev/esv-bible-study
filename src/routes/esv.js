var express = require('express');
var esvService = require('../services/ESVService');

var router = express.Router();

router.get("/", function (req, res) {
    esvService.getVerses(req.query.q, res);
})

router.get("/headings", function (req, res) {
    esvService.getChapterHeadings(req.query.q, res);
})

module.exports = router;