angular.module("Ecommerce").factory("CarrinhoService", function () {
    var carrinho = [];

    var _addProduto = function (produto, qtde) {
        product = JSON.parse(JSON.stringify(produto));
        for (var i in carrinho) {
            if (carrinho[i].id === product.id) {
                carrinho[i].quantity = carrinho[i].quantity + qtde;
                localStorage.setItem("carrinho", JSON.stringify(carrinho));
                return;
            }


        }
        product.quantity = qtde;
        carrinho = _listarProdutos();
        carrinho.push(product);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));


    };
    var _removerProduto = function (id) {
        carrinho = _listarProdutos();

        for (const i in carrinho) {
            if (carrinho.length > 0) {
                if (carrinho[i].id === id) {
                    carrinho.splice(i, 1);
                    localStorage.setItem("carrinho", JSON.stringify(carrinho));
                    return;
                }
            } else {
                _limparCarrinho();
            }
        }
    };


    var _listarProdutos = function () {
        var obj = localStorage.getItem("carrinho");
        if (!obj) {
            carrinho = [];

        } else {
            carrinho = JSON.parse(obj);
        }
        return carrinho;
    };
    var _atualizarProduto = function (produto) {
        //Salva o produto no localStorage
    };


    var _limparCarrinho = function () {
        carrinho = {};
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    };
    return {
        addProduto: _addProduto,
        removerProduto: _removerProduto,
        listarProdutos: _listarProdutos,
        atualizarProduto: _atualizarProduto,
        limparCarrinho: _limparCarrinho,

    }
});