import express from "express";
import users from "../users.json" assert { type: "json" };

const app = express();

app.use(express.Router());
app.use(express.json());

// Get /user
app.get("/user", (req, res) => res.json(users));
app.get("/user/:id", (req, res) => {
  const user = users.find((item) => item.id === +req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(200).send("ID not found");
  }
});

// Post /user
// app.post("/user", (req, res) => {
//   const { username, password } = req.body;
//   const id = users.id + 1;
//   const user = {
//     id,
//     username,
//     password,
//   };

//   users.push(user);
//   res.status(201).json(user);
// });

export default app;
