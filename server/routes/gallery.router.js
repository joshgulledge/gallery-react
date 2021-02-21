const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
// bring in pool for stretch goals
const pool = require('../modules/pool.js');


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
      console.log(galleryItem.id, galleryId);
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);
    // use pool to get data from database
    // declare a SQLtext 
    const SQLtext = `SELECT * FROM "pictures";`

    pool.query(SQLtext).then((dbResults) => {
      console.log('dbResults', dbResults);
      res.send(dbResults.rows)
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
}); // END GET Route

module.exports = router;