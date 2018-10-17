angular.module("Ecommerce").controller("detalheController", function ($scope, $http, $interval, productsService, $routeParams, CarrinhoService) {
        var carregarDetalhes = function () {
            var id = $routeParams.idProduto;
            productsService.buscarProdutosPorID(id).then(function (response) {
                $scope.produto = response.data;
            })
                .catch(function (response) {
                    alert(response);
                })

        };

        $scope.addCarrinho = function (product, qtd) {
            $scope.classAlert = "alert alert-info";
            $scope.textAlert = "Produto adcionado ao carrinho";

            if (product.quantity >= qtd) {
                $scope.mostrar = true;
                $interval(function () {
                    $scope.mostrar = false;
                }, 3000);


                CarrinhoService.addProduto(product, qtd);
                carregarDetalhes();
            } else {
                $scope.textAlert = "Quantidade maior que o Estoque ";
                $scope.mostrar = true;
                $interval(function () {
                    $scope.mostrar = false;
                }, 5000);

            }
        };


        carregarDetalhes();


    }
);