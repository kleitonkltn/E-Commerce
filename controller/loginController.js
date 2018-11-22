angular.module("Ecommerce").controller("loginController", function ($scope, $http, loginService, $location) {


    $scope.cadastrar = function (newUser) {
        loginService._signup(newUser)
            .then(function (response) {
                alert("Sucesso ao Cadastrar")
            }).catch(function (response) {
            alert("Erro")
        });
    };

    $scope.autenticar = function (usuario) {
        loginService._login(usuario)
            .then(function (response) {
                $scope.dateUser = response.data;
                localStorage.setItem("token", JSON.stringify($scope.dateUser.token));
                localStorage.setItem("user", JSON.stringify($scope.dateUser));
                location.reload(menu.html)
                $location.url("/carrinho")

            }).catch(function (response) {
            alert("Usuario ou Senha Incorreto")
        });

    };

})
;