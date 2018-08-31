"use strict";
const inventory = {
  template: `
  <section>
  <input type="text" placeholder="Item ID">
  <input type="text" placeholder="Name of Item">
  <input type="text" placeholder="Price of Item">
  <input type="text" placeholder="Quantity">
    <button ng-click="">Update</button>
</section>
    <button ng-click="$ctrl.getItems();">Get Inventory</button>
    <section ng-repeat="items in $ctrl.cartItems track by $index"<p>{{ items.id }}</p>
    <section ng-repeat="items in $ctrl.cartItems track by $index"<p>{{ items.product }}</p>
    <section ng-repeat="items in $ctrl.cartItems track by $index"<p>{{ items.price }}</p>
    <section ng-repeat="items in $ctrl.cartItems track by $index"<p>{{ items.quantity }}</p>
    </section>


  `,
  controller: ["cartService", function(cartService) {
    const vm = this;
      cartService.getAllItems().then((response) => {
        vm.cartItems = response;
      })
  }]
  
}

angular.module("App")
       .component("inventory", inventory);