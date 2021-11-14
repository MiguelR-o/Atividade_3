# Atividade 3 RestAPI

Este API visa fazer scrape a um site de animes escolhido ao acaso (no caso foi samehadaku).

## Instalação

* Clonar o repositório
* Instalar todas a packages com
```bash
npm install
```

## Utilização

Inicar o servidor com:
```bash
npm start
```
ou
```bash
npm run nodemon
```
Depois abrir a página [localhost:3000](http://localhost:3000/)

## Endpoints

| Url        | Params           | Type | Description |
| ------------- |:-------------:| :-----:|  :-----|
| /      | - | - | homepage
| /page/{página}    | página     |  int | obter pagina com o numero |
| /anime/{id}   | id     |  String | detalhar anime |
| /anime/eps/{link}   | link     |  String | detalhar episodios do anime |
| /search/{titulo}/{página}   | titulo, página     |  String, int | pesquisar anime |
| /season | -     |  - |listar animes desta temporada|
| /date-release | -     |  - | data de lançamento |
| /list-anime/{página} | página     |  int | listar todos os animes da página |
| /tag/{tag} | tag   |  String | listar os items da tag |
| /genre/{id} | id   |  String | mostrar anime por género |


