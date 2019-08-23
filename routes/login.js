const express = require('express');
const router = express.Router();
const Demo = require('../models/database')

router.get('/login', (req, res) => {
    res.send('Hello home route');
});

// Post into our database
router.post('/login', (req, res) => {

    Demo.create(req.body).then((user) => {

        res.send(user);
        console.log("data saved to db");
    })
        .catch((err) => {
            console.log(err.message);
            res.status(400).json('Error : ' + err)
        });


})


// Update database
router.put('/login/:id', (req, res) => {
    Demo.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then(() => {
            Demo.findOne({ _id: req.params.id })

                .then((user) => {
                    res.send(user);
                })
                .catch((err) => {
                    console.log(err.message);
                    res.status(400).json('Error : ' + err)
                });
        });
});

// delect from database

router.delete('/login/:id', (req, res) => {

    Demo.findByIdAndRemove({ _id: req.params.id })
        .then((user) => {
            res.send(user);
        })
        .catch((err) => {
            console.log(err.message);
            res.status(400).json('Error : ' + err)
        });

})

module.exports = router;