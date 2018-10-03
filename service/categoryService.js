angular.module("Ecommerce").factory("categoryService", function ($http) {
    url = "http://ecommerce-cpw.herokuapp.com/rest";
    var _listarCategorias = function () {
        return $http.get(url + "/category/list");

    };
    var _buscarCategoriaPorID = function (idCategoria) {
        return $http.get(url + "/category/" + idCategoria);

    };
    return {
        listarCategorias: _listarCategorias,
        buscarCategoriaPorID: _buscarCategoriaPorID
    };
});