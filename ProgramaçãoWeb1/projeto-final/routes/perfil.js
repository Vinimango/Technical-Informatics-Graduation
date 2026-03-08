import express from "express";
const perfilRouter = express.Router();

/* GET users listing. */
perfilRouter.get("/:nome", function (req, res, next) {
  const nome = req.params.nome;
  res.render("perfil", { nome });
});

export default perfilRouter;
