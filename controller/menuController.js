angular.module("Ecommerce").controller("menuController", function ($scope, $http, categoryService, loginService, $location) {
    var statusLogin = function () {
        if (loginService.logado() == true) {
            $scope.btLogout = true;
            $scope.btLogin = false;

        } else {
            $scope.btLogin = true;
            $scope.btLogout = false;

        }

    };
    statusLogin();
    var funcao = function () {
        if (loginService.funcao() == "ADMINISTRATOR") {
            $scope.acesso = true;
        }

    };
    funcao();


    var carregarCategorias = function () {
        categoryService.listarCategorias()
            .then(function (response) {
                $scope.menuCategorias = response.data;

            })

    };

    $scope.logout = function () {
        loginService.logout();
        location.reload(menubar);
        $location.url("/home")
    };


    carregarCategorias()


})
;