angular.module("Ecommerce").controller("listarCategorias", function ($scope, $http, categoryService) {
    var carregarCategorias = function () {
        categoryService.listarCategorias()
            .then(function (response) {
                $scope.categorias = response.data;

            })

    };
    carregarCategorias();

});