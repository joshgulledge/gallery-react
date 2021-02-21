const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
// bring in pool for stretch goals
const pool = require('../modules/pool.js');


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('req.params: ', req.params);
    const galleryId = req.params.id;
            //  ---- BASE MODE ----
    // for(const galleryItem of galleryItems) {
    //   console.log(galleryItem.id, galleryId);
    //     if(galleryItem.id == galleryId) {
    //       console.log('item likes before', galleryItem.likes);
    //         galleryItem.likes += 1;
    //         console.log('item likes after', galleryItem.likes);
        // }
    // }
         // ---- STRETCH GOALS ----
    // use $ to avoid injections
    // set the SQL code
    const SQLtext = `UPDATE "pictures"
    SET "likes" = "likes" + 1
    WHERE "id" = $1;`

    pool.query(SQLtext, [galleryId]).then(dbResults => {
      // console.log('dbResults are: ', dbResults);
      res.sendStatus(200);
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    })

}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);
    // use pool to get data from database
    // declare a SQLtext 
    const SQLtext = `SELECT * FROM "pictures"
ORDER BY "id" ASC;`

    pool.query(SQLtext).then((dbResults) => {
      // console.log('dbResults', dbResults);
      res.send(dbResults.rows)
    }).catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
}); // END GET Route

module.exports = router;