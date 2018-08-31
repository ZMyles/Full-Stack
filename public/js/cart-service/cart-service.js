
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
};


angular.module("App")
      .service("cartService", cartService)