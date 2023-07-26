const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

const app = express();

const port = 3000;

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
