"use strict";
const inventory = {
  template: `
    <button ng-click="$ctrl.getItems();">Get Inventory</button>
    <p ng-repeat="items in $ctrl.cartItems track by $index">{{ items }}</p>
  `,controller: function($http) {
    const vm = this;

    vm.getItems = () => {
      $http({
        url: "/api/item/routes",
        method: "GET"
      }).then((response) => {
        vm.cartItems = response.date;
      })
    }
  }
}

angular.module("App")
       .components("inventory", inventory);