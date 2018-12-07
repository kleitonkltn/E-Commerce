angular.module("Ecommerce").controller("carrinhoController", function ($scope, CarrinhoService, $location, loginService, comprasService) {
    $scope.btremover = true;
    $scope.textH1Carrinho = true;
    $scope.btfinalizarCompra = true;

    var carregarCarrinho = function () {
        carrinho = localStorage.getItem("carrinho");
        if (!carrinho) {
            carrinho = [];
        } else {
            $scope.carrinho = JSON.parse(carrinho);
        }
    };
    var limparCarrinho = function () {
        var r = confirm("Deseja remover todos os produto do Carrinho?");
        if (r === true) {
            CarrinhoService.limparCarrinho()
            carregarCarrinho();
        } else {

        }
    };
    carregarCarrinho();
    var somarCarrinho = function () {
        if (carrinho.length > 0) {
            var vet = JSON.parse(carrinho);
            $scope.total = 0;
            var totalValue = 0;
            for (const i in vet) {
                totalValue = (vet[i].quantity * vet[i].price) + totalValue;
                $scope.total = (totalValue.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: 'currency',
                    currency: 'BRL'
                }));
            }
        }
    };
    somarCarrinho();
    $scope.removerProduto = function (id) {

        var r = confirm("Deseja remover este produto?");
        if (r === true) {
            CarrinhoService.removerProduto(id);
            carregarCarrinho();
            somarCarrinho();
        } else {

        }

    };
    $scope.finalizarCompra = function () {
        if (loginService.logado() === true) {
            $scope.btremover = false;
            $scope.textH1Carrinho = false;
            $scope.btfinalizarCompra = false;

            $scope.textH1FinCompra = true;
            $scope.btConfirmarVenda = true;


        } else {
            $location.url("/login")

        }

    };
    $scope.novaVenda = function () {

        var carrinhoVenda = JSON.parse(localStorage.getItem("carrinho"));

        for (var i = 0; i < carrinhoVenda.length; i++) {
            carrinhoVenda[i].img = null;
        }
        comprasService.novaVenda(carrinhoVenda)
            .then(function (response) {

                alert("Venda  Finalizada")
                localStorage.removeItem("carrinho");
                carregarCarrinho();
                $location.url("/minhasCompras")
            })

            .catch(function (response) {
                alert("Venda Não Finalizada")
            });
    }


});

