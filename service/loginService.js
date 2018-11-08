angular.module("Ecommerce").factory("loginService", function ($http) {

    url = "http://ecommerce-cpw.herokuapp.com/rest";
    var _login = function (usuario) {
        var req = {
            method: "GET",
            url: url + "/user/login",
            headers: {
                "Authorization": "Basic " + btoa(usuario.email + ":" + usuario.password)
            }
        };
        return $http(req);
    };


    var _logado = function () {
        if (localStorage.getItem("token")) {
            return true;
        } else {
            return false;
        }
    };
    var _logout = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };


    var _signup = function (usuario) {
        return $http.post(url + "/user/signup", usuario);
    };


    return {

        _login: _login,
        _logado: _logado,
        _logout: _logout,
        _signup: _signup
    };


});