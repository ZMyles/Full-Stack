"use strict";

const express = require("express");
const cart = express.Router();
const cartItems = [
  {
    id: 1,
    product: "Socks",
    price: 6,
    quantity: 3
  },
  {
    id: 2,
    product: "Sword",
    price: 1,
    quantity: 1
  },
  {
    id: 3,
    product: "Hat",
    price: 12,
    quantity: 2
  }
];

cart.get("/cart-items", (req, res) => {
  console.log("Get All items");
  res.send(cartItems);
})

module.exports = cart;

