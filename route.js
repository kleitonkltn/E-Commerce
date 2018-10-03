angular.module("Ecommerce").config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("menu",{
        controller: "menuController"
    });
    $routeProvider.when("/home", {
        templateUrl: "view/home.html",
        controller: "homeController"
    });
    $routeProvider.when("/categoryProducts/:idCategoria", {
        templateUrl: "view/categoryProducts.html",
        controller: "productsController"
    });

}]);
