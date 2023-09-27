var app = angular.module("myApp", ["ngAnimate", "ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider
        
        .when("/", {
            templateUrl : "view/home.html"
        })
        .when("/newAns", {
            templateUrl : "view/newAns.html"
        })
        .when("/updateAns", {
            templateUrl : "view/updateAns.html"
        })
        .when("/showAns", {
            templateUrl : "view/showAns.html"
        })
        .when("/delAns", {
            templateUrl : "view/delAns.html"
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

            $http.post("lib/api_adicionaAns.php", JSON.stringify($scope.objANS)).then(
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

        $scope.btn_alt_ans = function(){
            console.log("btn_alt_ans clicado");
        };

        $scope.btn_del_ans = function(){
            console.log("btn_del_ans clicado");
        }

        $scope.mostra_ans_assinado = function(){
            console.log("tbl carregada no inicio");

            $http.get("lib/api_buscaAns.php").then(function (response) {
				$scope.listaAtual = response.data;
			});
        };

        $scope.mostra_ans_assinado();

    });