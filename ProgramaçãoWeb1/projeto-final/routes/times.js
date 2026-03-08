import express from "express";

const timesRouter = express.Router();

/* GET users listing. */
timesRouter.get("/", function (req, res, next) {
  res.render("times");
});

export default timesRouter;
