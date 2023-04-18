const express = require("express");
const path = require("path");
// const wordRoutes = require("./routes/word")
const cors = require("cors");
const compression = require("compression");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(compression({ filter: this.shouldCompress }));
app.use(express.urlencoded({ extended: false }));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});


const server = app.listen(
  8008,
  console.log(`Express сэрвэр 8008 порт дээр аслаа... `)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Алдаа гарлаа : ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
