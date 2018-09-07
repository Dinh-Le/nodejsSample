const express = require('express');
const router = express.Router();
const db = require('../../database');
// Notice: No need to require body-parser here! (This is JavaScript, not
// Java, nor React)
/** proto377.haaga-helia.fi:80/api/people **/
router.get('/', function (req, res) {
    db.select().from('Person').then((data) => {
        res.status(200);
        res.send(data);
    });
});
router.post('/', function (req, res) {
    // Just a start of err handling for model for you
    if (req.body.firstName && req.body.lastName) {
        db.insert(req.body).returning('*').into('Person').then((data) => {
            res.status(200);
            res.send(data);
        }
        );
    } else {
        res.status(400); // Just a start of err handling for model for you
        res.end(JSON.stringify({ "error": "firstName and/or lastName missing" }));
    }
});
module.exports = router;