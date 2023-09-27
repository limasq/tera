var app = angular.module("myApp", ["ngAnimate", "ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider
        
        .when("/", {
            templateUrl : "view/login.html",
            controller  : "loginCtrl"
        })
        .when("/sair", {
            templateUrl : "view/login.html",
            controller  : "loginCtrl"
        })
        .when("/cadastro", {
            templateUrl : "view/cadastro.html",
            controller  : "crudCtrl"
        })
        .when("/insere", {
            templateUrl : "view/insere.html",
            controller  : "crudCtrl"
        })
        .when("/atualiza", {
            templateUrl : "view/atualiza.html",
            controller  : "crudCtrl"
        })
        .when("/mostra", {
            templateUrl : "view/mostra.html",
            controller  : "crudCtrl"
        })
        .when("/remove", {
            templateUrl : "view/remove.html",
            controller  : "crudCtrl"
        });
    });

    app.controller("crudCtrl", function($scope, $http){
        // console.log("angular ok");

        $scope.titulo_pagina = "Gestão de ANS para cessão de dados financeiros";
        $scope.idx = null;

        $scope.objANS = {
            id_ans: null,
            departamento: null,
            responsavel: null,
            consulta: null,
            historico: null,
            dt_assinatura: null,
            email: null,
            situacao: null 
        };

        $scope.mostraAns = function(){
            // console.log("tbl carregada no inicio");

            $http.get("api/mostraAns.php").then(function (response) {
				$scope.listaAtual = response.data;
			});
        };

        $scope.mostraAns();

        $scope.btnRemove = function(item){
            // console.log("id do ans a excluir: " + item.id_ans);
            $scope.objANS.id_ans = item.id_ans;
            $scope.objANS.departamento = item.departamento;
            $scope.objANS.responsavel = item.responsavel;
            $scope.objANS.consulta = item.consulta;
            $scope.objANS.historico = item.historico;
            $scope.objANS.dt_assinatura = item.dt_assinatura;
            $scope.objANS.email = item.email;
            $scope.objANS.situacao = item.situacao;
            console.log($scope.objANS);

            $scope.idx = item.id_ans;
        };

        $scope.btnSolicitaRemocao = function(){
        
            console.log('api/remove.php?id_ans='+ $scope.idx);
            $http.get('api/remove.php?id_ans='+ $scope.idx).then(
                function (response) {
				    $scope.msg = response.data;
                    // alert($scope.msg);
                    $scope.mostraAns();
			    });
        };

        $scope.btnAltera = function(item){
            $scope.objANS.id_ans = item.id_ans;
            $scope.objANS.departamento = item.departamento;
            $scope.objANS.responsavel = item.responsavel;
            $scope.objANS.consulta = item.consulta;
            $scope.objANS.historico = item.historico;
            $scope.objANS.dt_assinatura = item.dt_assinatura;
            $scope.objANS.email = item.email;
            $scope.objANS.situacao = item.situacao;
            console.log($scope.objANS);

            $scope.data1 = item.id_ans;
            $scope.data2 = item.situacao;
            $scope.data3 = item.dt_assinatura;
            $scope.data4 = item.historico;
            $scope.data5 = item.consulta;
            
        };



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


    });