angular.module("Ecommerce").factory("comprasService", function ($http) {
    url = "http://ecommerce-cpw.herokuapp.com/rest";
    var _novaVenda = function (carrinho) {
        token = localStorage.getItem("token");
        var req = {
            method: "POST",
            url: url + "/order",
            headers: {
                "Authorization":
                    "Bearer " + JSON.parse(token),
                "Content-Type": "application/json"
            }
            , data: carrinho
        };
        return $http(req);
    };
    var _listarCompras = function () {
        token = localStorage.getItem("token");
        var req = {
            method: "GET",
            url: url + "/order/list/1",
            headers: {
                "Authorization":
                    "Bearer " + JSON.parse(token),
                "Content-Type": "application/json"
            }
        };
        return $http(req);

    };
    var _listarComprasDetalhe = function (idCompra) {
        token = localStorage.getItem("token");
        var req = {
            method: "GET",
            url: url + "/order/"+idCompra,
            headers: {
                "Authorization":
                    "Bearer " + JSON.parse(token),
                "Content-Type": "application/json"
            }
        };
        return $http(req);

    };


    return {
        novaVenda: _novaVenda,
        listarCompras: _listarCompras,
        listarComprasDetalhe: _listarComprasDetalhe

    }
});