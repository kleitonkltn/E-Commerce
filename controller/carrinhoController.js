angular.module("Ecommerce").controller("carrinhoController", function ($scope, CarrinhoService) {

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
        if (carrinho.length >0) {
            var vet = JSON.parse(carrinho);
            $scope.total = 0;
            for (const i in vet) {
                $scope.total = (vet[i].quantity * vet[i].price) + $scope.total;
                $scope.total = ($scope.total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))
            }
        }
    };
    $scope.removerProduto = function (id) {

        var r = confirm("Deseja remover este produto?");
        if (r === true) {
            CarrinhoService.removerProduto(id);
            carregarCarrinho();
            somarCarrinho();
        } else {

        }

    };

    somarCarrinho();
});

