var app = angular.module("myApp", ["ngAnimate", "ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider
        
        .when("/", {
            templateUrl : "view/login.html"
        })
        .when("/sair", {
            templateUrl : "view/login.html"
        })
        .when("/cadastro", {
            templateUrl : "view/cadastro.html"
        })
        .when("/insere", {
            templateUrl : "view/insere.html"
        })
        .when("/atualiza", {
            templateUrl : "view/atualiza.html"
        })
        .when("/mostra", {
            templateUrl : "view/mostra.html"
        })
        .when("/remove", {
            templateUrl : "view/remove.html"
        });
    });

    app.controller("myCtrl", function($scope, $http){
        console.log("angular ok");

        $scope.titulo_pagina = "Gestão de ANS para cessão de dados financeiros"

        $scope.objANS = [{
            id_ans: null,
            departamento: null,
            responsavel: null,
            consulta: null,
            validade: null,
            dt_assinatura: null,
            email: null,
            situacao: null 
        }];

        $scope.btn_add_ans = function(){
            console.log("btn_add_ans clicado");

            $scope.objANS.id_ans = 0;
            $scope.objANS.dt_assinatura = new Date().toISOString().substring(0, 10);
            $scope.objANS.situacao = 1;

            console.log($scope.objANS);

            $http.post("api/insereAns.php", JSON.stringify($scope.objANS)).then(
                function(response){
                    $scope.novoId = response.data;
                    alert("ANS adicionada com sucesso");
                },
                function(error){
                    $scope.msgErro = "Ocorreu algum erro durante o processamento";
                    $scope.statusval = response.status;
                    alert($scope.msgErro + ' - ' + $scope.statusval);
                }
            );  
    
        };

        $scope.btnAtualiza = function(item){
            console.log("id do ans a altera: " + item);
        };

        $scope.btnRemove = function(item){
            console.log("id do ans a excluir: " + item);
        }

        $scope.mostraAns = function(){
            console.log("tbl carregada no inicio");

            $http.get("api/mostraAns.php").then(function (response) {
				$scope.listaAtual = response.data;
			});
        };

        $scope.mostraAns();

    });