# Ignite - Fundamentos NodeJS

## Iniciando o repositório do git

```bash

## Iniciando um novo repositório
git init

```

## Enviando o repositório para o github

Estamos aqui criando e enviando o repositório para o github utilizando o Github CLI

```bash

## Criando e enviando o repositório local para o github
gh repo create

```
## Criando a esturura do projeto

Preparando a pasta do projeto para iniciar o desenvolvimento

Este comando é utilizado para iniciar um novo pacote ou até mesmo um pacote já existente

```bash

## Iniciando um novo pacote na forma reduzida
npm init -y

## Iniciando um novo pacote com --yes
npm init --yes

```bash

## Também pode ser utilizado o yarn (Outro gerenciador de pacotes)
yarn init -y

```

O comando npm pode ser utilizando tanto com o ```i``` quanto com o ```init```

O comando npm informado com ```-y``` ou ```--yes``` serve para pular o questionário inicial de criação criando um pacote limpo, somente com o arquivo ```package.json``` criado.

Ao rodar o comando ```npm init -y``` será criado um arquivo ```package.json``` com as seguintes informações:

### Arquivo padrão limpo

```json
{
  "name": "Nome do projeto",
  "version": "1.0.0",
  "description": "Descrição do projeto",
  "main": "index.js",
  "license": "MIT"
}
```

### Arquivo gerado pelo comando

```json
{
  "name": "rocketseat-ignite-chapter01-fundamentos-nodejs",
  "version": "1.0.0",
  "description": "Fundamentos do NodeJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/claudneysessa/rocketseat-ignite-Chapter01-fundamentos-nodeJS.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/claudneysessa/rocketseat-ignite-Chapter01-fundamentos-nodeJS/issues"
  },
  "homepage": "https://github.com/claudneysessa/rocketseat-ignite-Chapter01-fundamentos-nodeJS#readme"
}
```

O comando faz uma leitura da pasta em busca de informações para a criação deste arquivo.

Neste caso ele pegou algumas informações do meu readme.md e do repositório do Git criado para a geração do arquivo ```package.json``` após sua criação estamos livres para modifica-lo e atualiza-lo conforme necessário.

Se eu já possuo um projeto criado e configurado, posso iniciar o repositorio com o comando ```npm install``` e ele irá ler o arquivo ```package.json``` e instalar todas as dependências necessárias para o projeto.

```bash

## Iniciando um projeto existente já configurado na forma reduzida
npm i

## Iniciando um projeto existente já configurado
npm install

```

## Instalando o Express

O Express é um framework para NodeJS que nos ajuda a criar aplicações web de forma mais simples e rápida.

```bash

## Instalando o Express na forma reduzida
npm i express

## Instalando o Express
npm install express

```

Após a execução o comando cria a pasta node_modules e o arquivo package-lock.json

Ele também altera o meu arquivo package.json adicionando a dependência do express.

```json
{
  "name": "rocketseat-ignite-chapter01-fundamentos-nodejs",
  "version": "1.0.0",
  "description": "Fundamentos do NodeJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/claudneysessa/rocketseat-ignite-Chapter01-fundamentos-nodeJS.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/claudneysessa/rocketseat-ignite-Chapter01-fundamentos-nodeJS/issues"
  },
  "homepage": "https://github.com/claudneysessa/rocketseat-ignite-Chapter01-fundamentos-nodeJS#readme",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

## Ajustando o .gitingore

Devo garantir que a pasta node_modules não seja enviada para o repositório do github, para isso crio um arquivo ```.gitignore``` na raiz do projeto e adiciono a pasta node_modules.

Dentro do arquivo eu vou adicionar a pasta node_modules para que o git não envie esta pasta para o repositório.

```.gitignore

node_modules

```

## Iniciando a estrutura do projeto

Criarei a pasta src e dentro dela o arquivo index.js

Dentro deste arquivo executarei alguns testes com o express para verificar se o mesmo esta funcionando corretamente.

```js

// Criando uma constante com a instância do express
const express = require('express');

// Instanciando o express
const app = express();

// Adicionando um listen para execução do express na porta 3333
app.listen(3333);

```

Para testar, pasta executar o comando abaixo

```bash

node src/index.js

```

Se tudo ocorreu bem o cursor ira ficar estático e o terminal não irá retornar nada, isso significa que o servidor esta rodando corretamente.

Se executar no browser o endereço [http://localhost:3333](http://localhost:3333) irá retornar uma mensagem de erro 404, isso significa que o servidor esta rodando corretamente porém eu não tenho nenhuma rota configurada.

Vou adicionar uma rota de Get para a rota raiz "/" e retornar uma mensagem de Hello World

```js

// Criando uma constante com a instância do express
const express = require('express');

// Instanciando o express
const app = express();

// Criando uma rota de Get
app.get("/", (req, res) => {
    return res.send("Hello World");
});

// Adicionando um listen para execução do express na porta 3333
app.listen(3333);
    
```

Reinicie o servidor e acesse o endereço [http://localhost:3333](http://localhost:3333) e verifique se a mensagem de Hello World esta sendo exibida.

Agora minha rota irá retornar no browser a mensagem Hello World no link [http://localhost:3333](http://localhost:3333).

Eu tamém posso retornar um JSON

```js
// Criando uma constante com a instância do express
const express = require("express");

// Instanciando o express
const app = express();

// Criando uma rota de Get para a rota raiz "/"
app.get("/", (req, res) => {
  return res.send("Hello World");
});

// Criando uma rota de Get para a rota "/json"
app.get("/json", (req, res) => {
  return res.json({
    message: "Hello World",
  });
});

// Adicionando um listen para execução do express na porta 3333
app.listen(3333);
```

Reiniciei o servidor e acessei o endereço [http://localhost:3333/json](http://localhost:3333/json) e verifiquei se o JSON esta sendo retornado corretamente.

Agora minha rota irá retornar no browser um JSON  com a mensagem Hello World no link [http://localhost:3333/json](http://localhost:3333/json).

```json
{
  "message": "Hello World"
}
```

No Google Chrome eu posso instalar uma extensão chamada JSON Viewer que irá formatar o JSON para uma melhor visualização.

## Instalando o Nodemon

O Nodemon é uma ferramenta que irá monitorar todas as alterações no meu código e reiniciar o servidor automaticamente.

Para instalar o nodemon utilizarei o -D para instalar como dependência de desenvolvimento.

```bash

## Rodando o comando com -D
npm install nodemon -D

## Rodando o comando com --save-dev
npm install nodemon --save-dev

```

Agora meu package.json ficou assim, já com o nodemon configurado como dependência de desenvolvimento.

```json
{
  "name": "rocketseat-ignite-chapter01-fundamentos-nodejs",
  "version": "1.0.0",
  "description": "Fundamentos do NodeJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/claudneysessa/rocketseat-ignite-Chapter01-fundamentos-nodeJS.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/claudneysessa/rocketseat-ignite-Chapter01-fundamentos-nodeJS/issues"
  },
  "homepage": "https://github.com/claudneysessa/rocketseat-ignite-Chapter01-fundamentos-nodeJS#readme",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
```

Após a instalação eu vou criar um script de desenvolvimento no package.json

```json
{
  "name": "rocketseat-ignite-chapter01-fundamentos-nodejs",
  "version": "1.0.0",
  "description": "Fundamentos do NodeJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/claudneysessa/rocketseat-ignite-Chapter01-fundamentos-nodeJS.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/claudneysessa/rocketseat-ignite-Chapter01-fundamentos-nodeJS/issues"
  },
  "homepage": "https://github.com/claudneysessa/rocketseat-ignite-Chapter01-fundamentos-nodeJS#readme",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
```

Agora eu posso executar o comando npm run dev para iniciar o servidor.

Após a execução do comando eu recebo a mensagem de que o servidor esta rodando na porta 3333.

Agora eu posso alterar o código e o servidor irá reiniciar automaticamente.

Vou executar meu servidor agora com o nodemon.

```bash

## Rodando o script configurado no package.json
npm run dev

```

Qualquer alteração no meu script agora vai refletir no servidor.

Exemplo:

```js
// Criando uma constante com a instância do express
const express = require("express");

// Instanciando o express
const app = express();

// Criando uma rota de Get
app.get("/", (req, res) => {
  return res.send("Hello World Ignite - Fundamentos NodeJS");
});

// Criando uma rota de Get
app.get("/json", (req, res) => {
  return res.json({
    message: "Hello World Ignite - Fundamentos NodeJS",
  });
});

// Adicionando um listen para execução do express na porta 3333
app.listen(3333);
```

Quando eu der o F5 no browser eu verifico que a mensagem foi alterada sem a necessidade de reiniciar o servidor.

## Utilizando os Métodos HTTP

O HTTP é um protocolo de comunicação que é utilizado para a transferência de dados na web.

Métodos Existentes

| Método | Descrição |
| - | - |
| GET | Buscar informações do back-end |
| POST | Criar uma informação no back-end |
| PUT | Alterar uma informação no back-end |
| PATH | Alterar uma informação específica |
| DELETE | Deletar uma informação no back-end |

É importante lembrar que o HTTP é um protocolo stateless, ou seja, ele não guarda estado, ou seja, não guarda informações entre as requisições.

Toda rota deve estar preparada para receber uma requisição e retornar uma resposta.

As rotas são definidas pele método HTTP e pela URL (localhost:3333/users).

A URL deve apontar para um recurso, ou seja, para uma entidade.

Exemplo:

| Método | URL | Descrição |
| - | - | - |
| GET | /courses | Listar cursos |
| GET | /courses/1 | Buscar dados do curso com ID 1 |
| POST | /courses | Criar um curso |
| PUT | /courses/1 | Alterar os dados do curso com ID 1 |
| DELETE | /courses/1 | Deletar o curso com ID 1 |

## Tipos de Parâmetros

Existem 4 tipos de parâmetros que podem ser enviados na requisição.

| Tipo | Descrição | Exemplo |
| - | - | - |
| Header | Enviados no cabeçalho "headers" da requisição | auth:258dsf5ad8d |
| Route | Encapsulados na rota utilizando a "/" para separa da URL original | /courses/{id} |
| Query | Enviados na URL da requisição para informar um filtro ou parametros de seleção | /courses?id=1 |
| Body | Enviados no corpo da requisição "body" para criação ou atualização de um registro | {"name": "Curso 01"} |

## Quais parâmetros utilizar?

Achei um link bacana que explica bem sobre os tipos de parâmetros.

- [Tipos de Parâmetros nas requisições REST](https://blog.rocketseat.com.br/tipos-de-parametros-nas-requisicoes-rest/)

Não que seja uma regra, mas é importante haver uma coerência na utilização dos parâmetros.

Algumas suposições:

- Uma rota de GET não precisa enviar de um "body" pois não irá criar nem alterar dados, porém precisa de parametros de rota e query para encontrar um recurso ou uma lista de recurso e disponibilizar os dados desejados.
- Uma rota de POST não precisa enviar parâmetros de rota nem de query pois apenas irá criar um novo registro, porém precisa de um "body" para saber o que criar.
- Uma rota de PUT precisa de um "body" para atualizar um registro ou um grupo de regitros e de parâmetros de rota e query para encontrar os recursos corretos a atualizar.
- Uma rota de PATH precisa de um "body" para atualizar um registro e de parâmetros de rota para encontrar o recurso correto a atualizar, porém não precisa de parametros de query pois irá agir em apenas um único registro.
- Uma rota de DELETE não precisa de um "body" porém precisa de parâmetros de rota para encontrar o recurso correto a atualizar, porém não precisa de parametros de query pois irá agir em apenas um único registro.

Resumo:

| Tipo | Headers | Route | Query | Body |
| - | - | - | - | - |
| Get | Sim | Sim | Sim | Não |
| Post | Sim | Não | Não | Sim |
| Put | Sim | Sim | Sim | Sim |
| Path | Sim | Sim | Sim | Sim |
| Delete | Sim | Sim | Sim | Não |

## Tipos de retorno

Existem alguns tipos de retorno que podem ser enviados na resposta, os principais são:

| Tipo | Descrição |
| - | - |
| Texto | Retorna uma String |
| XML | Retorna um arquivo XML |
| JSON | Retorna um objeto JSON |
| HTML | Retorna um arquivo HTML |

Normalmente em API do tipo REST retornamos um JSON.

## Códigos de Status

Os códigos de status são utilizados para informar o status da requisição.

| Código | Descrição |
| - | - |
| 1xx | Informação |
| 2xx | Sucesso |
| 3xx | Redirecionamento |
| 4xx | Erro do cliente |
| 5xx | Erro do servidor |

## Criando rotas com Express

Para criar uma rota com o Express é bem simples, basta utilizar o método HTTP desejado e passar a URL e uma função que será executada quando a rota for chamada.

```js

// Rota de GET
// Retorna uma lista de cursos
app.get("/courses", (request, response) => {
  return response.json([
    { id: 1, name: "Curso 01" },
    { id: 2, name: "Curso 02" },
    { id: 3, name: "Curso 03" },
  ]);
});

// Rota de POST
// Cria um novo curso
// No exemplo abaixo incluimos o Curso 04
app.post("/courses", (request, response) => {
  return response.json([
    { id: 1, name: "Curso 01" },
    { id: 2, name: "Curso 02" },
    { id: 3, name: "Curso 03" },
    { id: 4, name: "Curso 04" },
  ]);
});

// Rota de PUT
// Altera um curso
// No exemplo abaixo altera o curso com ID 2
app.put("/courses/:id", (request, response) => {
  return response.json([
    { id: 1, name: "Curso 01" },
    { id: 2, name: "Curso 02 Alterado" },
    { id: 3, name: "Curso 03" },
    { id: 4, name: "Curso 04" },
  ]);
});

// Rota de PUT
// Altera um curso
// No exemplo abaixo altera o curso com ID 2
app.patch("/courses/:id", (request, response) => {
  return response.json([
    { id: 1, name: "Curso 01" },
    { id: 2, name: "Curso 02" },
    { id: 3, name: "Curso 03 Alterado" },
    { id: 4, name: "Curso 04" },
  ]);
});

// Rota de DELETE
// Deleta um curso
// No exemplo abaixo deleta o curso com ID 1
app.delete("/courses/:id", (request, response) => {
  return response.json([
    { id: 2, name: "Curso 02" },
    { id: 3, name: "Curso 03" },
    { id: 4, name: "Curso 04" },
  ]);
});

```

Para testar as rotas não conseguimos utilizar o navegador pois ele não envia os verbos HTTP, então precisamos de uma ferramenta para testar as rotas.

Exemplo de Ferramentas:

- Postman
- Insomnia
- Extension do VSCode REST Client

## Obtendo os valores enviados via Query Params

```js

// Rota de GET
// Retorna uma lista de cursos
app.get("/courses", (request, response) => {
  // Criando uma constante para buscar os Query Params
  const query = request.query;

  // Retornando no console a lista de query params
  console.log(query);

  return response.json([
    { id: 1, name: "Curso 01" },
    { id: 2, name: "Curso 02" },
    { id: 3, name: "Curso 03" },
  ]);
});

```
