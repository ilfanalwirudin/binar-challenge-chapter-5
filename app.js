//Import Modules
import express from "express";

import createError from "http-errors";

import apiRouter from "./routes/api.js";
import loginRouter from "./routes/login.js";
import gameRouter from "./routes/game.js";
import indexRouter from "./routes/index.js";

//Define Variables
const app = express();
const PORT = process.env.PORT || 5000;

// use every module here
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", indexRouter);
app.use("/game", gameRouter);
app.use("/login", loginRouter);
app.use("/api", apiRouter);

//create error 404
app.use((req, res, next) => {
  next(createError(404));
});

// Port listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
