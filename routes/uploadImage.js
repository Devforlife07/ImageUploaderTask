const Router = require("express").Router();
const upload = require("../utils/upload");
const Cloudinary = require("cloudinary");
const Post = require("../model/post");
Cloudinary.config({
  cloud_name: "devforlife07",
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

Router.post("/", async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send({
        msg: "File Size Too Large",
      });
    }
    console.log(req.body);
    if (!req.body.title || !req.body.description || !req.file) {
      res.status(500).send({
        msg: "Please Enter All Fields",
      });
    }

    Cloudinary.v2.uploader.upload(req.file.path, async (error, result) => {
      console.log(error);
      console.log(result);
      const post = new Post({
        title: req.body.title,
        description: req.body.description,
        url: result.url,
      });
      console.log(post);
      try {
        await post.save();
        return res.status(200).json("Item Saved Successfully!");
      } catch (e) {
        console.log(e);
        res.status(500).send("Server Error");
      }
    });
  });
});

module.exports = Router;
