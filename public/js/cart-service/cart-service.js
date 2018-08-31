
// requesting from the database using the 'routes' in the back-end
function cartService($http) {
  const vm = this;
  vm.getAllItems = () => {
    return $http({
      url: "/cart-items",
      method: "GET"
    }).then ((response) => {
      vm.cart = response.data;
      return vm.cart;
    });
  };

  vm.addItems = (newItem) => {
    return $http({
      url: "/cart-items",
      method: "POST",
      data: {product: newItem.product,
             price:  newItem. price,
             quantity: newItem. quantity
      }
    }).then ((response) => {
      vm.cart = response.data;
      return vm.cart;
    });
  };

  vm.removeItems = () => {
    return $http({
      url: "/cart-items/" + id,
      method: "DELETE"
    }).then ((response) => {
      vm.cart = response.data;
      return vm.cart;
    });
  };

  vm.updateItem = (cart, id) => {
    return $http({
      url: "/cart-items/"+ id,
      method: "PUT",
      data: cart
    }).then((response) => {
      vm.cart = response.data;
      return vm.cart;
    })

};


angular.module("App")
      .service("cartService", cartService)