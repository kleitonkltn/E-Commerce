angular.module("Ecommerce").controller("detalheController", function ($scope, $http, productsService,$routeParams) {
    var carregarDetalhes = function () {
        var id = $routeParams.idProduto;
        productsService.buscarProdutosPorID(id).then(function (response) {
            $scope.produto = response.data;
        })
            .catch(function (response) {
                alert(response);
            })

    };
    carregarDetalhes();


});