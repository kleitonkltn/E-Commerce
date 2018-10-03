angular.module("Ecommerce").controller("homeController", function ($scope, $http, categoryService) {
    var carregarCategorias = function () {
        categoryService.listarCategorias()
            .then(function (response) {
                $scope.categorias = response.data;

            })

    };
    carregarCategorias();
    $scope.buscar = function (categoriaid) {
        categoryService.buscarCategoriaPorID(categoriaid)
            .then(function (response) {
                $scope.categorias = response.data;
            })
    };


    // var carregarProdutos = function () {
    //     $http.get("http://ecommerce-cpw.herokuapp.com/rest/product/list/8/1")
    //         .then(function (response) {
    //             $scope.produtos = response.data;
    //
    //         })
    //
    // };
    // carregarProdutos();
});