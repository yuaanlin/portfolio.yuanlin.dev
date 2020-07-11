import express from "express";
var compression = require("compression");
var serveStatic = require("serve-static");

const app = express();

app.use(compression());
app.use(serveStatic("public"));

app.listen(8080, () => {
    console.log("http://localhost:8080");
});
