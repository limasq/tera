# CRUD-TERA-ANS 

## Objetivo

Desenvolver um sistema CRUD simples em vanilla JavaScript, Bootstrap, PHP e MySQL para funcionar como um CRM de ANS para compartilhamento de dados, dentro das diretrizes da LGPD.

## Detalhamento

Os ANS (acordos de nível de serviço) deverão conter as seguintes informações:
1. Nome do departamento;
2. Nome do chefe do departamento;
3. Motivo pelo qual precisa acessar os dados;
4. Tempo de validade do acordo (data início e data fim);
5. Amplitude dos meses pesquisados;
6. Tipo de informação desejada.

## Regras globais do ANS

1. Não pode haver ANS com o mesmo número;
2. Não pode haver ANS sem o nome do chefe do departamento, visto que este será o responsável legal pela liberação indevida dos dados acessados;
3. O tempo de validade do acordo será de 2 anos, com início a partir da assinatura do chefe do departamento consumidos dos dados;
4. O departamento fornecedor dos dados tem o direito de romper o acordo unilateralmente se perceber vazamento indevido de informações.

## Estrutura do aplicativo

O aplicativo web de gerenciamento de ANS obedecerá a filosofia estrutural MVC;

* Diretório View: onde ficarão as páginas ou templates do sistema;
* Diretório Model: onde ficarão os arquivos de conexão com o banco de dados e api;
* Diretório Controller: onde ficarão os scripts de interação entre o View e o Model. 

## Linguagens utilizadas;

* HTML5;
* CSS - Bootstrap 3x
* Vanilla JavaScript, jQuery, Angular 1x
* PHP5 e/ou PHP7
* SQL