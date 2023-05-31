const express = require("express");
const router = express.Router();
const mongodb = require("mongodb");

const Post = require("../models/post.model");

router.get('/', async function(req, res, next) {
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    try {
          const posts = await Post.find({});
          res.status(200).json(posts);
    }
    catch(error) {
     console.log(error);
    }
});

// GET a single post by 'id'
router.get('/:id', async function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

    try {
        const id = req.params.id;
        const post = await Post.findOne({ _id: id })
          res.status(200).json(post);
    }
    catch(error) {
          res.status(404).json({ msg: error.message})
    }
});// GET a single post by 'title'
router.get('/searched/:title', async function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

    try {
        const title = req.params.title;
        const posts = await Post.find({ title: title })
          res.status(200).json(posts);
    }
    catch(error) {
          res.status(404).json({ msg: error.message})
    }
});

// POST a new post
router.post('/', async function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')

    const { title, message, creator } = req.body;

     try {
          const newPost = await Post.create({ title, message, creator })
          res.status(200).json(newPost);
     }
     catch (error) {
          res.status(409).json({ msg: error.message})
     }
});

// DELETE post
router.delete('/:id', function(req, res, next) {
     res.json('delete  post');
});

// UPDATE post
router.patch('/:id', function(req, res, next) {
     res.json('update post');
});


module.exports = router;