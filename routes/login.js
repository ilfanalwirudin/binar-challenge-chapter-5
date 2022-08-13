import express from "express";
const router = express();

router.use(express.Router());
router.use(express.json());

//render login page
router.get("/", (req, res, next) =>
  res.render("login", { title: "Login Page" })
);

router.post("/", (req, res, next) => {
  console.log(req.query);
  res.status(200);
});

export default router;
