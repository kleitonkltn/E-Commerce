angular.module("Ecommerce").controller("comprasController", function ($scope, comprasService) {
    var carregarCompras = function () {
        comprasService.listarCompras()
            .then(function (response) {
                $scope.listCompras = response.data;

            }).catch(function (response) {
            alert(response);
        });

    };
    $scope.carregarDetalheCompras = function (idcompra) {
        comprasService.listarComprasDetalhe(idcompra)
            .then(function (response) {
                $scope.detalheCompras = response.data;

            }).catch(function (response) {
            alert(response);
        });

    };

    carregarCompras();

});