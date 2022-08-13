import express from "express";
const router = express();

router.use(express.Router());
router.use(express.json());

router.get("/", (req, res) => {
  const name = req.query.name;
  res.render("index", { title: "Traditional Games", name: name });
});

router.post("/", (req, res) => {
  const user = req.query;
  console.log(user);

  res.render("index", { title: "Traditional Games", name: user.name });
});

export default router;
