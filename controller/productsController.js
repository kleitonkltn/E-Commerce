angular.module("Ecommerce").controller("productsController", function ($scope, productsService, categoryService, $routeParams) {

    var carregarProdutos = function () {
        var id = $routeParams.idCategoria;
        productsService.buscarProdutosPorIDCategoria(id, 1)
            .then(function (response) {
                $scope.produtos = response.data;
            })

            .catch(function (response) {
                alert(response.data);
            });

    };

    var carregarCategoria = function () {
        var id = $routeParams.idCategoria;
        categoryService.buscarCategoriaPorID(id).then(function (response) {
            $scope.categoria = response.data;
        })
            .catch(function (response) {
                alert(response);
            })

    };


    carregarProdutos();
    carregarCategoria()
})
;
