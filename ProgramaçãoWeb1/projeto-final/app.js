import createError from "http-errors"; // Substitua require por import
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import perfilRouter from "./routes/perfil.js";
import aboutRouter from "./routes/about.js";
import portfolioRouter from "./routes/portfolio.js";
import contactRouter from "./routes/contact.js";
import timesRouter from "./routes/times.js";

var app = express();

// view engine setup
let __dirname = path.dirname(new URL(import.meta.url).pathname);
if (process.platform === "win32") {
  __dirname = __dirname.substring(1);
}
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/perfil", perfilRouter);
app.use("/portfolio", portfolioRouter);
app.use("/contact", contactRouter);
app.use("/about", aboutRouter);
app.use("/times", timesRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// module.exports = app;
export default app;
