const express = require("express");
const mongoose = require("mongoose");
const requireDir = require('require-dir');
const cors = require("cors");

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o mongodb
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true } );

//requerindo p models
requireDir('./src/models');


//implementando o arquivo routes.js
app.use("/api", require("./src/routes"));

app.listen(3001);
