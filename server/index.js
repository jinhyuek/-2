const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

//mongodb+srv://yjjongy:52401@cluster0.unk2i64.mongodb.net/?retryWrites=true&w=majority

app.use(express.static(path.join(__dirname, "../filed/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Post } = require("./Model/Post.js");
app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://yjjongy:528401@cluster0.unk2i64.mongodb.net/Community?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log("connecting MongoDB...");
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

app.get("/", (요청, 응답) => {
  응답.sendFile(path.join(__dirname, "../filed/build/index.html"));
});
app.get("*", (요청, 응답) => {
  응답.sendFile(path.join(__dirname, "../filed/build/index.html"));
});
app.post("/api/post/submit", (req, res) => {
  let temp = req.body;
  const CommunityPost = new Post(temp);
  CommunityPost.save()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

app.post("/api/post/list", (req, res) => {
  Post.find()
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      es.status(400).json({ succes: false });
    });
});
/* 
1.post MongoDB Model
2. Client CSS (Bootstrap, Emotion)
*/
