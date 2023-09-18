var app = angular.module("myApp", ["ngAnimate", "ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider
        
        .when("/", {
            templateUrl : "view/home.html"
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

        $scope.btn_insere = function(){
            console.log("btn_insere clicado");

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

        $scope.btn_atualiza = function(){
            console.log("btn_atualiza clicado");
        };

        $scope.btn_remove = function(){
            console.log("btn_remove clicado");
        }

        $scope.mostra_ans_assinado = function(){
            console.log("tbl carregada no inicio");

            $http.get("api/mostraAns.php").then(function (response) {
				$scope.listaAtual = response.data;
			});
        };

        $scope.mostra_ans_assinado();

    });