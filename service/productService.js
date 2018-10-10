angular.module("Ecommerce").factory("productsService", function ($http) {
    url = "http://ecommerce-cpw.herokuapp.com/rest";

    var _buscarProdutosPorIDCategoria = function(idCategoria, pagina) {
        return $http.get(url + "/product/list/" + idCategoria + "/" + pagina);
    };
    var _buscarProdutosPorID = function(idProduto) {
        return $http.get(url + "/product/" + idProduto);
    };
    return {
        buscarProdutosPorID: _buscarProdutosPorID,
        buscarProdutosPorIDCategoria: _buscarProdutosPorIDCategoria
    };




});