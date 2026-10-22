const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/test", (req, res) => {
  const input = req.query.command;
  exec("echo " + input, (error, stdout) => {
    res.send(stdout);
  });
});

app.listen(3000);
