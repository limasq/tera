# CRUD-TERA

## Objetivo

Desenvolver um sistema CRUD simples em Angular 1x, Bootstrap 5x, PHP 7x e MySQL para funcionar como um CRM de ANS para compartilhamento de dados, dentro das diretrizes da LGPD.

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

## Progresso e ações tomadas

1. Começando com uma SPA, com roteamento entre páginas separadamente;
2. Transformar a página que lista os ANS para que acione modais para alteração, exclusão e inclusão de novos ANS;
3. Inclusão dos botões de alteração e exclusão;
4. Transformação dos botões de alteração e exclusão em links apontando para as referidas páginas pelas rotas"

## Linguagens utilizadas

* HTML5;
* CSS - Bootstrap 5x
* Vanilla JavaScript, jQuery, Angular 1x
* PHP 7.3.10
* SQL

## Melhorias
1. Montar o documento a partir dos dados inseridos, permitindo que o cliente consumidor (dos dados) imprima para pdf e insira assinatura eletrônica;
2. Ferramenta para o upload do arquivo assinado (no item anterior) e receber uma resposta por e-mail de quando será liberado acesso aos dados;
3. Transformar a página que mostra todas as informações para uma que traga apenas o mínimo necessário como id, departamento e dtAssinatura e adicionar um link (ou modal) para ver todas as informações;

## Fontes
* [AngularJS](https://angularjs.org/)
* [AngularJS Tutorial](https://www.tutlane.com/tutorial/angularjs)
* [Playlist Angularjs - Rodrigo Branas](https://www.youtube.com/watch?v=_y7rKxqPoyg&t=25s) 
* [Página oficial do Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
* [Datasets gratis para MySQL](https://www.databasestar.com/free-data-sets/)


## Hospedagem: 
* [Login](http://asdfool.com.br/index.html) 
* [CRUD](http://asdfool.com.br/index.html/#!/mostra) 