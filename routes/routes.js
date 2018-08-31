"use strict";

const express = require("express");
const cart = express.Router();
const pool = require("../pg-connection-pool.js");

cart.get("/cart-items", (req, res)=> {
  pool.query("select * from ShoppingCart").then((results) =>{
    res.send(results.rows);
  });
});




// const cartItems = [
//   {
//     id: 1,
//     product: "Socks",
//     price: 6,
//     quantity: 3
//   },
//   {
//     id: 2,
//     product: "Sword",
//     price: 1,
//     quantity: 1
//   },
//   {
//     id: 3,
//     product: "Hat",
//     price: 12,
//     quantity: 2
//   }
// ];

cart.post("/cart-items", (req, res) => {
  pool.query("Insert Into ShoppingCart(product, price, quantity) values($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
    pool.query("select * from ShoppingCart").then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
  })
});

cart.put("/cart-items/:id", (req,res) => {
  pool.query("Update ShoppingCart set  product=$1::text, price=$2::int, quantity=$3::int where id= $4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(() => {
    pool.query("select * from ShoppingCart order by id").then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
  })

    console.log(req.params.id);
    console.log(req.body);
});

cart.delete("/cart-items/:id", (req,res) =>{
  pool.query("Delete from ShoppingCart where id = $1::int", [req.params.id]).then(() => {
    pool.query("select * from ShoppingCart").then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
  })
  
})

module.exports = cart;

