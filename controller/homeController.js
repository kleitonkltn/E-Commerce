angular.module("Ecommerce").controller("homeController", function ($scope, $http, categoryService) {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var i = 0;
    var text = "";
    var x;
    var carregarCategorias = function () {
        categoryService.listarCategorias()
            .then(function (response) {
                $scope.categorias = response.data;

            });


    };
    carregarCategorias();
    var teste = function () {

    };
    teste();


});