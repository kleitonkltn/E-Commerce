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
        if ((!!localStorage.getItem("token")) &&((!!localStorage.getItem("user")))) {
            return true;
        }
        return false;
    };
    var _funcao = function () {
        if (_logado() == true){
            var obj = localStorage.getItem("user");
            var cargo = JSON.parse(obj);
            return cargo.personRole;

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
        logado: _logado,
        logout: _logout,
        funcao:_funcao,
        _signup: _signup
    };


});