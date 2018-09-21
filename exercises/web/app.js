const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  helmet = require("helmet"),
  cluster = require("cluster"),
  numCPUs = require("os").cpus().length;
  
let countRequest = 0;


app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`); // Set the views folder!
// Give our app support to parse JSON data on form POST requests and make it available at req.body

// Middlewares
app.use((req, res, next) => {
  process.send("llego un request");
  next();
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());

// APPGet
app.get("/", (req, res) => {
  res.render("index", {
    title: "Titulo",
    message: "Este es el mensaje"
  });
});
app.get("/form", (req, res) => {
  res.render("form", {
    name: req.query.name,
    age: req.query.age,
    text: req.query.text
  });
});
app.post("/form/send", (req, res) => {
  console.log(req.body);
  res.render("form", {
    name: req.body.name,
    age: req.body.age,
    text: req.body.text
  });
});

if (cluster.isMaster) {
  console.log(`Master proccess is running with PID #${process.pid}`);

  cluster.on("message", () => {
    countRequest++;
    console.log(countRequest);
  });

  // Fork workers, one for each CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker #${worker.process.pid} died with code ${code} and signal ${signal}`);
    cluster.fork();
  });
} else {
  app.listen(8000, () => {
    console.log("App listening on port 8000!");
  });
}