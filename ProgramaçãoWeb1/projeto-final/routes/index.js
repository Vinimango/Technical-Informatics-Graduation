import express from "express";
import path from "path";
var indexRouter = express.Router();
const app = express();

const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static(path.join(__dirname, "public")));
/* GET home page. */
indexRouter.get("/", function (req, res, next) {
  res.render("index", { title: "Ex" });
});

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

// module.exports = router;
export default indexRouter;
