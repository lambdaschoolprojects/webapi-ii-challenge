const express = require('express');

const db = require('../data/db');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await db.find();
        res.json(posts);
    } catch(error) {
        res.status(500).json({error: "The posts information could not be retrieved."});
    }
});

// Post Schema
//
// {
//     title: "The post title", // String, required
//         contents: "The post contents", // String, required
//     created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
//     updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
// }

router.post('/', async (req, res) => {
    const { title, contents } = req.body;

    if (!title || !contents)
        return res.send(400).json({ errorMessage: "Please provide title and contents for the post." });
    try {
        const newPost = await db.insert({title, contents});
        return res.status(201).json(newPost);
    } catch(error) {
        return res.status(500).json({ error: "There was an error while saving the post to the database" })
    }

});

module.exports = router;