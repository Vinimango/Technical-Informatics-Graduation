import express from "express";

const contactRouter = express.Router();

/* GET users listing. */
contactRouter.get("/", function (req, res, next) {
  res.render("contact");
});

export default contactRouter;
