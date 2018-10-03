angular.module("Ecommerce").factory("productsService", function ($http) {
    url = "http://ecommerce-cpw.herokuapp.com/rest";

    var _buscarProdutosPorIDCategoria = function(idCategoria, pagina) {
        return $http.get(url + "/product/list/" + idCategoria + "/" + pagina);
    };
    return {
        buscarProdutosPorIDCategoria: _buscarProdutosPorIDCategoria
    };


});