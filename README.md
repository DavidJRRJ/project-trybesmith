
# Trybesmith

Uma API de uma loja de items medievais utilizando Typescript.

Foi desenvolvida todas as camadas da aplicação (Models, Service e Controllers) e, por meio dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou CRUD, Create, Read, Update e Delete).







## Stack utilizada

- Node.js
- TypeScript
- MySQL
- Express
- Json Web Token



## Rodando com Docker

Clone o projeto

```bash
  git clone git@github.com:DavidJRRJ/project-trybesmith.git
```

Entre no diretório do projeto

```bash
  cd project-trybesmith
```

Na pasta do projeto suba os containers com os serviços **Node** e o **Mysql** com o comando

```bash
  docker-compose up -d
```

Entre no terminal do container

```bash
  docker exec -it trybesmith bash
```

Instale as dependências

```bash
  npm install  
```

Rode a aplicação

```bash
  npm start  
```


## Documentação da API

### Cadastro de produtos

```http
  POST /products
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório** |
| `amount` | `string` | **Obrigatório** |

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

- O resultado retornado para cadastrar o produto com sucesso deverá ser conforme exibido abaixo, com um `status 201`:
```json
    {
    "id": 1,
    "name": "Poção de cura",
    "amount": "20 gold",
    }
```

- Se o campo "name" não for informado, o resultado retornado deverá ser um  `status 400` e
```json
    { "message": "\"name\" is required" }
```

- Se o campo "name" não for do tipo `string`, o resultado retornado deverá ser um `status 422` e
```json
    { "message": "\"name\" must be a string" }
```

- Se o campo "name" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um `status 422` e
```json
    { "message": "\"name\" length must be at least 3 characters long" }
```  

- Se o campo "amount" não for informado, o resultado retornado deverá ser um `status 400` e
```json
    { "message": "\"amount\" is required" }
```

- Se o campo "amount" não for do tipo `string`, o resultado retornado deverá ser um `status 422` e
```json
    { "message": "\"amount\" must be a string" }
```

- Se o campo "amount" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um `status 422` e
```json
    { "message": "\"amount\" length must be at least 3 characters long" }
```    

### Listagem de produtos 

```http
  GET /products
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| Nenhum     |  | |

- O resultado retornado para listar produtos com sucesso deverá ser conforme exibido abaixo, com um `status 200`:
    ```json
    [
      {
        "id": 1,
        "name": "Poção de cura",
        "amount": "20 gold",
        "orderId": null
      },
      {
        "id": 2,
        "name": "Escudo do Herói",
        "amount": "100 diamond",
        "orderId": 1
      }
    ]
    ```
### Cadastro de pessoas usuárias

```http
  POST /users
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório** |
| `classe` | `string` | **Obrigatório** |
| `level` | `number` | **Obrigatório** |
| `password` | `string` | **Obrigatório** |

- O endpoint deve receber a seguinte estrutura:
```json
{ 
  "username": "MAX",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```
- Se a pessoa usuária for cadastrada com sucesso, o resultado deverá ser conforme o exibido abaixo, com um `status 201` e retornando um token:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

### Lista todos os pedidos

```http
  GET /orders
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| Nenhum     |  | |

- Quando houver mais de um pedido, o resultado retornado para listar pedidos com sucesso deverá ser conforme exibido abaixo, com um `status 200`:
    ```json
      [
        {
          "id": 1,
          "userId": 2,
          "productsIds": [1, 2]
        },
        {
          "id": 2,
          "userId": 1,
          "productsIds": [3, 4]
        }
      ]
    ```

### Login de pessoas usuárias

```http
  POST /login
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório** |
| `password` | `string` | **Obrigatório** |

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "username": "string",
    "password": "string"
  }
```
- Se o login foi feito com sucesso, o resultado deverá ser um `status 200` e deverá retornar um _token_:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

- Se o _login_ não tiver o campo "username", o resultado retornado deverá ser um `status 400` e
```json
    { "message": "\"username\" is required" }
```
  
- Se o _login_ não tiver o campo "password", o resultado retornado deverá ser um `status 400`
```json
    { "message": "\"password\" is required" }
```

 
- Se o _login_ tiver o username inválido, o resultado retornado deverá ser um  `staus 401` e
```json
    { "message": "Username or password invalid" }
```


- Se o login tiver a senha inválida, o resultado retornado deverá ser um `status 401` e
```json
    { "message": "Username or password invalid" }
```
