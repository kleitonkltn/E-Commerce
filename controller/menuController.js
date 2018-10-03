angular.module("Ecommerce").controller("menuController", function ($scope, $http, categoryService) {

    var carregarCategorias = function () {
        categoryService.listarCategorias()
            .then(function (response) {
                $scope.menuCategorias = response.data;

            })

    };
    carregarCategorias();
});