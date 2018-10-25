angular.module("Ecommerce").controller("productsController", function ($scope,$interval, productsService, categoryService, $routeParams, CarrinhoService) {

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
    $scope.addCarrinho = function (product) {
        $scope.classAlert = "alert alert-info";
        $scope.textAlert = "Produto adicionado ao carrinho";


        $scope.mostrar = true;



        CarrinhoService.addProduto(product, 1);
        $interval(function () {
            $scope.mostrar = false;
        }, 3000);

    };


    carregarProdutos();
    carregarCategoria()
})
;
