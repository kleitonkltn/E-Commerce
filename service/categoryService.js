angular.module("Ecommerce").factory("categoryService", function ($http) {
    url = "http://ecommerce-cpw.herokuapp.com/rest";

    var _listarCategorias = function () {
        return $http.get(url + "/category/list");
    };
    var _buscarCategoriaPorID = function (idCategoria) {
        return $http.get(url + "/category/" + idCategoria);

    };
    var _cadastrarCategoria = function (categoria) {
        token = localStorage.getItem("token");
        var req = {
            method: "POST",
            url: url + "/category",
            headers: {
                "Authorization":
                    "Bearer " + JSON.parse(token),
                "Content-Type": "application/json"
            }
            , data: categoria
        };
        return $http(req);
    };


    return {
        listarCategorias: _listarCategorias,
        cadastrarCat: _cadastrarCategoria,
        buscarCategoriaPorID: _buscarCategoriaPorID
    };


})
;