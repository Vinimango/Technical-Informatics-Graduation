import express from "express";
const portfolioRouter = express.Router();

portfolioRouter.get("/", (req, res) => {
  res.render("portfolio"); // Remove `res.send()`
});

export default portfolioRouter;
