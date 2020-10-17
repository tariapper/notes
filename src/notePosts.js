const express = require('express');
const Note = require('../models/Note');
const router = express.Router();

router.get("/get", (req, res) => {
    Note.find()
        .then((data) => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post("/post", (req, res) => {
    const note = new Note({
        text: req.body.text,
        date: req.body.date
    });

    note
        .save()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// router.delete('/:blogId', (req, res) => {
//     Blog.remove({ _id: req.params.blodId })
//         .then((data) => res.status(200).json(data))
//         .catch((err) => {
//             res.status(500).json(err);
//         });
// });


module.exports = router;
