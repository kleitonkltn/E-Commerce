angular.module("Ecommerce").factory("productsService", function ($http) {
    url = "http://ecommerce-cpw.herokuapp.com/rest";

    var _buscarProdutosPorIDCategoria = function (idCategoria, pagina) {
        return $http.get(url + "/product/list/" + idCategoria + "/" + pagina);
    };
    var _buscarProdutosPorID = function (idProduto) {
        return $http.get(url + "/product/" + idProduto);
    };
    var _listarTodosProdutos = function () {
        return $http.get(url + "/product");
    };
    var _cadastrarProduto = function (produto) {

        return $http.post(url + "/product", produto,
            {
                header: {
                    "Authorization":
                        "Bearer " + localStorage.getItem("token")
                }
            }
        )

    };
    return {
        buscarProdutosPorID: _buscarProdutosPorID,
        buscarProdutosPorIDCategoria: _buscarProdutosPorIDCategoria,
        cadastrar: _cadastrarProduto
    };


});