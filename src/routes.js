const express = require('express');
const routes = express.Router();

const ProductCotrollers = require('./Controller/ProductCotroller')


routes.get("/products", ProductCotrollers.index);
routes.post("/products", ProductCotrollers.store);
routes.get("/products/:id", ProductCotrollers.show);
routes.put("/products/:id", ProductCotrollers.update);
routes.delete("/products/:id", ProductCotrollers.destroy);

module.exports = routes;