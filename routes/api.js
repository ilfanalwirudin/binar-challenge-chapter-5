import express from "express";
import users from "../users.json" assert { type: "json" };

const app = express();

app.use(express.Router());
app.use(express.json());

// Get /user
app.get("/v1/user", (req, res, next) => res.json(users));
app.get("/v1/user/:id", (req, res, next) => {
  const user = users.find((item) => item.id === +req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("ID not found");
  }
});

export default app;
