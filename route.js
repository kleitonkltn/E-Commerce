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
    $routeProvider.when("/products/:idProduto", {
        templateUrl: "view/detalhe.html",
        controller: "detalheController"
    });
    $routeProvider.when("/carrinho", {
        templateUrl: "view/carrinho.html",
        controller: "carrinhoController"
    });
    $routeProvider.when("/login", {
        templateUrl: "view/login.html",
        controller: "loginController"
    });
    $routeProvider.when("/cadProdutos", {
        templateUrl: "view/cadProdutos.html",
        controller: "cadProdutosController"
    });
    $routeProvider.when("/cadCategorias", {
        templateUrl: "view/cadCategorias.html",
        controller: "cadCategoriasController"
    });

}]);
