angular.module("Ecommerce").controller("menuController", function ($scope, $http, categoryService, loginService) {

    var carregarCategorias = function () {
        categoryService.listarCategorias()
            .then(function (response) {
                $scope.menuCategorias = response.data;

            })

    };
    carregarCategorias();
    // var verificarAcesso = function () {
    //     loginService._logado()
    //         .then(function (response) {
    //             alert(response);
    //         })
    // };
    // verificarAcesso();

    // if (localStorage.getItem("user") != null && localStorage.getItem("token") != null) {
    //
    //     user = localStorage.getItem("user");
    //     user = JSON.parse(user);
    //     nivelAcesso = user.personRole;
    //     if (nivelAcesso == "ADMINISTRATOR") {
    //         $scope.acesso = true;
    //     } else {
    //         $scope.acesso = false;
    //     }
    // }

    // verificarAcesso();
    // var verificarLogin = function () {
    //     if (localStorage.getItem("token") != null) {
    //         alert("false");
    //         $scope.logout = true;
    //         $scope.login = false;
    //     } else {
    //         alert("true");
    //         $scope.login = true;
    //         $scope.logout = false;
    //
    //     }
    //
    // };
    // verificarLogin();


})
;