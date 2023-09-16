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

        $scope.btn_add_ans = function(){
            console.log("btn_add_ans clicado");
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