angular.module("Ecommerce").controller("cadProdutosController", function ($scope, categoryService, productsService,$location) {

        var carregarCategorias = function () {
            categoryService.listarCategorias()
                .then(function (response) {
                    $scope.listCategorias = response.data;

                })

        };
        carregarCategorias();


        var carregarTodosProdutos = function () {
                categoryService.listarCategorias()
                    .then(function (response) {
                        for (var i = 0; i < $scope.listCategorias.length; i++) {


                            productsService.buscarProdutosPorIDCategoria($scope.listCategorias[i].id, 1)
                                .then(function (responsedate) {
                                        $scope.productsAll = responsedate.data;


                                    }
                                )


                        }
                    })
            }
        ;
        carregarTodosProdutos();


        $scope.cadastrarProduto = function (produto) {
            produto.img = produto.img.base64;
            productsService.cadastrar(produto)
                .then(function (response) {
                    alert("Produto Cadastrado com Sucesso");
                    $location.url("/categoryProducts/" + produto.category.id)
                }).catch(function (response) {
                alert("Cadastro Incorreto! Tente Novamente")
            })


        };


    }
)
;
