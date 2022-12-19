const express = require("express");
const port = 5000;
const app = express();

// const myLogger = (req, res, next) => {
//   console.log("LOGGED");
//   next();
// };

// const myFoo = (req, res, next) => {
//   console.log("FOO");
//   next();
// };

// const myDummy = (req, res, next) => {
//   console.log("DUMMY");
//   next();
// };

// const myExample = (req, res, next) => {
//   console.log("EXAMPLE");
//   next();
// };

// app.use(myFoo);
// app.use(myDummy);
// app.use(myExample);
// app.use(myLogger);

const requireJsonContent = () => {
  return (req, res, next) => {
    if (req.headers[`content-type`] !== "application/json") {
      res.status(400).send(`Server requires application/json`);
    } else {
      next();
    }
  };
};

app.get("/", (req, res) => {
  res.send("Hello world! Welcome to the Express Js");
});

app.post("/", requireJsonContent(), (req, res, next) => {
  res.send(`You sent JSON`);
});

app.listen(port, () => {
  console.log(`Express API is listening on port ${port}`);
});
