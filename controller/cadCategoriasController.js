angular.module("Ecommerce").controller("cadCategoriasController", function ($scope, categoryService) {

    var carregarCategorias = function () {
        categoryService.listarCategorias()
            .then(function (response) {
                $scope.listCategorias = response.data;

            })

    };
    carregarCategorias();

    $scope.cadastrarCategoria = function (categoria) {
        categoryService.cadastrarCat(categoria)
            .then(function (response) {
                alert("Categoria Cadastrada com Sucesso");
            }).catch(function (response) {
            alert("Cadastro Incorreto! Tente Novamente")
            alert(JSON.stringify(response))
        })


    };
});
