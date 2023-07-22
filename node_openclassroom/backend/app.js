const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser=require("body-parser")
const stuffRoutes=require("./routes/stuff")


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
mongoose.connect('mongodb+srv://test_node:test_node@cluster0.lxagwwy.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
app.use(bodyParser.json())
app.use("/api/stuff",stuffRoutes)




module.exports = app;