const express = require("express");
const app = express();
const path = require("path")
require("./db/connectDB")();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({
  path: "./config/.env",
});

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/api/uploadImage", require("./routes/uploadImage"));
app.use("/api/showImages", require("./routes/showImages"));
app.use(express.static(path.join(__dirname, '/build/')))

app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"))
})
app.listen(PORT, () => console.log(`Server Is Up On PORT ${PORT}`));