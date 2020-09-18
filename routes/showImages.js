const express = require("express")
const Router = express.Router();
const mongoose = require("mongoose");
const Post = require("../model/post")
Router.get("/", async (req, res) => {
    let posts = await Post.find({})
    if (posts.length == 0) {
        return res.status(404).send({
            msg: "No Posts Found"
        })
    }
    return res.send(posts)
})
module.exports = Router