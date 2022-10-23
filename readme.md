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
