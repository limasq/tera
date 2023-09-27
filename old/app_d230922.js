var app = angular.module("myApp", ["ngAnimate", "ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider
        
        .when("/", {
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
        mostraAns();

        $scope.titulo_pagina = "Gestão de ANS para cessão de dados financeiros";
        $scope.msgErro = "Ocorreu algum erro durante o processamento";


        function mostraAns() {
            $http.get("api/mostraAns.php").success(function(data) {
                $scope.items = data;
            }).error(function(data, status, headers, config) {
                console.log(data);
            })
        }  

        $scope.btn_insere = function() {
            console.log("btn_insere clicado");
            $scope.id_ans = 0;
            $scope.dt_assinatura = new Date().toISOString().substring(0, 10);
            $scope.situacao = 1;

            /*
            $http.post("api/insereAns.php", { id_ans: $scope.id_ans, departamento: $scope.departamento, responsavel: $scope.responsavel, consulta: $scope.consulta, validade: $scope.validade, dt_assinatura: $scope.dt_assinatura, email: $scope.email, situacao: $scope.situacao }).
                success(function(data, status, headers, config) {
                    mostraAns(); //refresh all information
                }).error(function(data, status, headers, config) {
                    console.log(data);
                });
            */
            
            $scope.id_ans = "";
            $scope.departamento = "";
            $scope.responsavel = "";
            $scope.consulta = "";
            $scope.validade = "";
            $scope.dt_assinatura = "";
            $scope.email = "";
            $scope.situacao = "";
        }

    });